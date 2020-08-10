import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from './components/AccountBalance/AccountBalance';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56  ,97);
  color: #cccccc;
`

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          currency: "$",
          price: 9575.18
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          currency: "$",
          price: 314.18
        },
        {
          name: "Litecoin",
          ticker: "LTC",
          currency: "$",
          price: 55.18
        },
        {
          name: "Ripple",
          ticker: "XRP",
          currency: "$",
          price: 0.28
        },
        {
          name: "Tether",
          ticker: "USDT",
          currency: "$",
          price: 1.0
        },
        {
          name: "BitcoinCash",
          ticker: "BCH",
          currency: "$",
          price: 344.24
        }

      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker){
   const coin = this.state.coinData.map(
      ({name, ticker, currency, price}) => {
        let newPrice = price;
        if (valueChangeTicker === ticker){
          newPrice = newPrice * this.randomPercentage();
        }
        
        return{
          name,
          ticker,
          currency,
          price:newPrice
        }

      }
     );

     this.setState( { coinData:coin});
  }

  randomPercentage(){
    return 0.995 + Math.random()*0.01;
  }

  render() {
    return (
      <Div className="App">
        <AppHeader />
        <AccountBalance currency = "$" amount = {this.state.balance}/>
        <Coinlist coinData = {this.state.coinData} handleRefresh={this.handleRefresh}/>
        
      </Div>
    );
  }

}

export default App;
