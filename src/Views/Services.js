import styled from 'styled-components';
import NavBar from '../Components/NavBar';
export default function Services() {
  return (
    <>
      <NavBar />

      <div>
        <Table>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </Table>
      </div>
    </>
  );
}

const Table = styled.table`
  td {
    border: 2px solid grey;
  }
  border-collapse: collapse;
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
