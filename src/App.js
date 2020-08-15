import React from 'react';
import Coinlist from './components/Coinlist/Coinlist';
import AccountBalance from './components/AccountBalance/AccountBalance';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios'

const COIN_COUNT = 10;

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56  ,97);
  color: #cccccc;
`

class App extends React.Component{

  state = {
    balance: 10000,
    balanceVisibility : true,
    coinData: [
      /* 
        {
        name: "Bitcoin",
          ticker: "BTC",
          balance: 0.123,
          currency: "$",
          price: 9575.18
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          balance: 2.45,
          currency: "$",
          price: 314.18
        },
        {
          name: "Litecoin",
          ticker: "LTC",
          balance: 9.123,
          currency: "$",
          price: 55.18
        },
        {
          name: "Ripple",
          ticker: "XRP",
          balance: 1237.3,
          currency: "$",
          price: 0.28
        },
        {
          name: "Tether",
          ticker: "USDT",
          balance: 562.12,
          currency: "$",
          price: 1.0
        },
        {
          name: "BitcoinCash",
          ticker: "BCH",
          balance: 1.223,
          currency: "$",
          price: 344.24
        }
      */
      ]
    }
  
  // Constructor not needed anymore regarding class properties 
  // constructor(props){
  //   super(props);
   
  //   this.handleRefresh = this.handleRefresh.bind(this);
  //   this.toggleBalance = this.toggleBalance.bind(this);
  // }

    componentDidMount = async () =>  {
      const response = 
        await axios.get('https://api.coinpaprika.com/v1/coins');

      const coinIDs = response.data.slice(0,COIN_COUNT)
      .map( coin => coin.id);

      const promises = coinIDs.map(id => 
        this.getCoinData(id)
        // axios.get('https://api.coinpaprika.com/v1/tickers/'+ id)
      ) ;

      const coinData = (await Promise.all(promises)).map( coin => {
        // const coin = prom.data;
        // let price = parseFloat(Number(coin.quotes.USD.price)).toFixed(4);
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          currency: "$",
          price: coin.quotes.USD.price
        }
      });

      this.setState({coinData});
    }

    getCoinData = async (coinID) => {
    let response = 
      await axios.get('https://api.coinpaprika.com/v1/tickers/'+ coinID);
    return response.data;
  }     

  handleRefresh =  (valueChangeTicker) => {
   const coin =  this.state.coinData.map(
       (values) => {
        let retVal = {...values};
        if (valueChangeTicker === retVal.ticker){
          // console.log(retVal);
          this.getCoinData(retVal.key)
          .then(coin => {
            retVal.price = coin.quotes.USD.price;
          });
        }
        
        return retVal;
      }
     );

     this.setState( { coinData:coin});
  }

  randomPercentage(){
    return 0.995 + Math.random()*0.01;
  }

  toggleBalance = () => {
    this.setState({ balanceVisibility: !this.state.balanceVisibility});
    console.log("Buttonvisibility= " + this.state.balanceVisibility);
  }

  render() {
    return (
      <Div className="App">
        <AppHeader />
        <AccountBalance 
          currency = "$" 
          amount = {this.state.balance} 
          showBalance ={this.state.balanceVisibility} 
          toggleBalance = {this.toggleBalance}
        />
        <Coinlist 
          coinData = {this.state.coinData} 
          handleRefresh={this.handleRefresh}
          showBalance ={this.state.balanceVisibility} 
        />
        
      </Div>
    );
  }

}

export default App;
