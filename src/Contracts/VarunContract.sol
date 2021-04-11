pragma solidity ^0.8.3;

contract VarunContract {
    address payable public bettor;
    uint256 public balance;

    uint256 betOn;

    constructor() {
        bettor = payable(msg.sender);
        balance = address(this).balance;
    }

    mapping(address => uint256) public betAmount;

    /**
     * @param _amount the amount the user bets
     *
     *
     */
    function bet(uint256 _amount, uint256 _betOn) public payable {
        require(bettor == msg.sender);
        betAmount[msg.sender] = _amount;
        betOn = _betOn;
        getResult();
    }

    function getResult() public payable {
        uint256 result = random();
        if (betOn == result) {
            bettor.transfer(betAmount[bettor]);
        }
    }

    function random() public view returns (uint256) {
        // Not secure, use ChainLink in production
        return (block.number % 2);
    }
}
