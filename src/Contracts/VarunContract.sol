pragma solidity ^0.8.3;

contract VarunContract {
    string public name = "varun contract";
    address public owner;
    uint256 public test = 1;

    constructor() {
        owner = msg.sender;
    }

    address[] public bettors;
    mapping(address => uint256) public balance;
    mapping(address => bool) public hasBet;
    mapping(address => bool) public isBetting;

    /**
     * @param _amount the amount the user bets
     *
     *
     */
    function bet(uint256 _amount) public {
        balance[msg.sender] += _amount;

        if (!hasBet[msg.sender]) {
            bettors.push(msg.sender);
        }
        hasBet[msg.sender] = true;
        isBetting[msg.sender] = true;
    }

    function payUser() public returns (uint256) {
        test++;
        return test;
    }

    function random() public view returns (uint256) {
        // Not secure, use ChainLink in production
        return (block.number % 2);
    }
}
