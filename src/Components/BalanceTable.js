import React, { useState } from 'react';
import { Table, Form, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

export default function BalanceTable({ balance }) {
  const { register, handleSubmit, control } = useForm();
  const [error, setError] = useState(null);

  async function onSubmit(data) {
    let amount = parseInt(data.betAmount);
    console.log(amount);
    console.log(balance);
    if (amount < balance) {
      setError(null);
    } else {
      setError('Not enough balance');
    }
  }
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Balance (vToken)</th>
            <th>Bet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{balance}</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </StyledTable>
      Enter an amount to bet and select a side
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="betAmount"
          control={control}
          rules={{ required: true }}
          type="number"
          {...register('betAmount')}
        />
        <input type="submit" />
      </form>
      <div>{error !== null ? error : null}</div>
    </TableContainer>
  );
}

const StyledTable = styled(Table)`
  margin: 5%;
  width: 20% !important;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
