import styled from 'styled-components';
import NavBar from '../Components/NavBar';
export default function Services() {
  return (
    <>
      <NavBar />
      <Container>
        <Table>
          <tr>
            <td>
              (Community members) control all aspects of the Cobalt Lend
              Protocol through democratic voting. Community members can submit a
              proposal to make any changes to the protocol through their user
              dashboard.The community members can vote on the (4) elected board
              seats inside the foundation at any time they feel the direction of
              Cobalt Lend may become comprised.
            </td>
            <td>
              The Cobalt Lend Foundation is comprised of (9) Members / Boards
              Seats. Which is comprised of: (4) Elected Board Seats that are
              called to vote by community at ANY TIME by the community. (2)
              Seats reserved for the Founders Multi-Sig Wallet. (3) Seats
              reserved for the (3) Largest Staking Wallets. The Foundation sets
              forth proposals for vote on how to spend operating capital & how
              to build out the ecosystem in its entirety.
            </td>
            <td>
              (Multi-Sig Wallet) A) Support the Foundation & community along
              with overseeing development B) Invest in other projects that
              provide synergy and can further Cobalt Lend as a whole C)Further
              the development of the overall ecosystem D)Fiscally support the
              Foundation
            </td>
          </tr>
          <tr>
            <td>
              Development is done in a well structured environment and overseen
              in stages with a “move fast and break things” mentality but with
              the over sight and direction of disciplined bright minded
              individuals that hail from academia and elite military units.
            </td>
            <td>
              We work with some of the industries most experienced web designers
              and Web 3.0 developers. We are constantly exploring new blockchain
              innovations to further the community efforts and simplify a
              normally mundane task, therefor reducing redundancy and slippage.
            </td>
            <td>
              Delivering on any project is always the main goal and must be
              balanced with delivering a trust worthy project to the community
              and doing so within a timely and reliable manner.
            </td>
          </tr>
        </Table>
      </Container>{' '}
    </>
  );
}

const Table = styled.table`
  margin-top: 5%;
  width: 80%;
  td {
    border: 2px solid grey;
  }
  border-collapse: collapse;
  tr {
    width: 33%;
  }
  tr:first-child td {
    border-top: 0;
  }
  tr td:first-child {
    border-left: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
  tr td:last-child {
    border-right: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
