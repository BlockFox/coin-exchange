import React, {useState, useEffect} from 'react';
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

export default function App(props){
  
  const [balance, setBalance] = useState(10000);
  const [balanceVisibility, setBalanceVisibility] = useState(true);
  const [coinData, setCoinData] = useState([]);
  
  const getCoinData = async (coinID) => {
    let response = 
      await axios.get('https://api.coinpaprika.com/v1/tickers/'+ coinID);
    return response.data;
  } 

  const componentDidMount = async () =>  {
    const response = 
      await axios.get('https://api.coinpaprika.com/v1/coins');

    const coinIDs = response.data.slice(0,COIN_COUNT)
    .map( coin => coin.id);

    const promises = coinIDs.map(id => 
      getCoinData(id)
    );

    const receivedCoinData = (await Promise.all(promises)).map( coin => {
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
    setCoinData(receivedCoinData);
  }

    useEffect(()=>{
      if (coinData.length === 0 ) {
        componentDidMount();
      }
    })

  const handleRefresh =  (valueChangeTicker) => {
    const coin =  coinData.map(
       (values) => {
        let retVal = {...values};
        if (valueChangeTicker === retVal.ticker){
          getCoinData(retVal.key)
          .then(coin => {
            retVal.price = coin.quotes.USD.price;
          });
        }
        return retVal;
      }
     );

     setCoinData(coin);
  }

  
  const toggleBalance = () => {
    setBalanceVisibility(!balanceVisibility);
  }

    return (
      <Div className="App">
        <AppHeader />
        <AccountBalance 
          currency = "$" 
          amount = {balance} 
          showBalance ={balanceVisibility} 
          toggleBalance = {toggleBalance}
          
        />
        <Coinlist 
          coinData = {coinData} 
          handleRefresh={handleRefresh}
          showBalance ={balanceVisibility} 
        />
        
      </Div>
    );
}

