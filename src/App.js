import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import BalanceTable from './Components/BalanceTable';
import Home from './Views/Home';
import { withRouter } from 'react-router';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './Views/ContactUs';
import AboutUs from './Views/AboutUs';

export default function App() {
  const [connection, setConnection] = useState('connected');
  // const [balance, setBalance] = useState(null);
  // const [web, setWeb3] = useState(null);

  // async function loadWeb3() {
  //   if (window.etheruem) {
  //     window.web3 = new Web3(window.ethereum);
  //     await window.etheruem.enable();
  //     return true;
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //     return true;
  //   } else {
  //     window.alert(
  //       `Oops, you need Meta Mask to use this app. Please install it and come
  //       back`
  //     );
  //     return false;
  //   }
  // }

  // useEffect(() => {
  //   async function run() {
  //     let loaded = await loadWeb3();
  //     const web3 = new Web3(window.ethereum);
  //     setWeb3(web3);
  //     let accounts = await web3.eth.getAccounts();
  //     if (loaded) {
  //       try {
  //         var contract = new web3.eth.Contract(
  //           VarunContract.abi,
  //           '0x7811ED3e89483e061f3032A2c63f24d2abe708c3'
  //         );
  //         // let x = contract.methods.payUser();
  //         let bal = await web3.eth.getBalance(accounts[0]);
  //         setBalance(bal);
  //         setConnection('connected');
  //       } catch (e) {
  //         console.log(e);
  //       }
  //       console.log();
  //     } else setConnection('none');
  //   }
  //   run();
  // }, []);

  //State for when the wallet information is loading
  // if (connection === 'loading') {
  //   return (
  //     <>
  //       <LoadingContainer>
  //         <Spinner animation="border" role="status">
  //           <span className="sr-only">Loading...</span>
  //         </Spinner>
  //       </LoadingContainer>
  //     </>
  //   );
  // }

  // //State if no wallet is present in the browser
  // if (connection === 'none') {
  //   return (
  //     <>
  //       Oops, you need Meta Mask to use this app. Please install it and come
  //       back
  //     </>
  //   );
  // }

  // if (connection === 'invalid network') {
  //   return (
  //     <>
  //       <div>Please make sure you're connected to the Ropsten Test network</div>
  //     </>
  //   );
  // }
  // //State once wallet is found
  // if (connection === 'connected') {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contactus" exact component={withRouter(ContactUs)} />
          <Route path="/" exact component={withRouter(Home)} />
          <Route path="/aboutus" exact component={withRouter(AboutUs)} />
        </Switch>
      </Router>
      {/* <BalanceTable balance={balance} /> */}
    </>
  );
  // }
}

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
