import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className ="App-title">Coin Exchange</h1>
      </header>
      <AccountBalance currency = "$" amount = {10000}/>
      <table className = "Coin-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody id= "btc_table">
          <Coin name = "Bitcoin" ticker = "BTC" currency = "$" price = {9575.18}/>
          <Coin name = "Ethereum " ticker = "ETH" currency = "$" price = {283.10}/>
          <Coin name = "Tether " ticker = "USDT" currency = "$" price = {0.999}/>
          <Coin name = "Litecoin" ticker = "LTC" currency = "$" price = {46.64}/>
        </tbody>
    </table>
    </div>
  );
}

export default App;
