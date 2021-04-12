import styled from 'styled-components';
import { Button, Container, Paper, Grid } from '@material-ui/core';
import TextLoop from 'react-text-loop';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { useState } from 'react';
export default function Home() {
  const [demoButton, setDemoButton] = useState('');
  const [signButton, setSignButton] = useState('');

  const [loanButton, setLoanButton] = useState('');

  return (
    <>
      {/* NavBar Section */}
      <NavBar />
      <Header>
        <Left>
          <span>The new way </span>
          <span>
            {' '}
            to{' '}
            <TextLoop>
              <ItemMove>borrow</ItemMove>
              <ItemMove>lend</ItemMove>
              <ItemMove>earn</ItemMove>
              <ItemMove>save</ItemMove>
            </TextLoop>
          </span>
          <SGrid direction="row" justify="space-evenly" container>
            <Button
              variant="contained"
              color={demoButton}
              onClick={() => setDemoButton('primary')}>
              Request a Demo
            </Button>
            <Button
              variant="contained"
              color={signButton}
              onClick={() => setSignButton('primary')}>
              Sign Up
            </Button>
          </SGrid>
        </Left>
        <Right>
          <Img src="HeroPhoto.png" alt="cover display" />
        </Right>
      </Header>
      <Cont>
        <GetLoan>
          Would you like to fund a project with us?
          <p>
            To submit a proposal to the Foundation for a community vote click
            “Get Loan”
          </p>
          <Button
            variant="contained"
            color={loanButton}
            onClick={() => setLoanButton('primary')}>
            Get Loan
          </Button>
        </GetLoan>
        <SImg src="BusinessIdea.png" />
      </Cont>
    </>
  );
}

const Header = styled.div`
  height: 45vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 7% 0 7% 0;
`;
const Left = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  height: 100%;
  font-size: 4em;
`;
const Right = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
  height: 100%;
  font-size: 4em;
`;
const ItemMove = styled.span`
  color: #3482f6;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 140%;
`;
const SImg = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

const SGrid = styled(Grid)`
  margin-top: 5% !important;
  width: 75% !important;
  margin: auto;
  text-align: center;
`;
const GetLoan = styled.div`
  font-size: 1.5em;
  width: 25%;
  display: flex;
  flex-direction: column;
  p {
    padding-top: 5%;
    font-weight: 400;
    font-size: 0.7em;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: center;
`;
