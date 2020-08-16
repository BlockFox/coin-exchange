import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
  `;


export default function Coinlist(props) {
    const toggleBalance = props.showBalance ?  
        props.balance : '***'
    return (
        <Table className = "Coin-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Balance</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody id= "btc_table">
                {
                    props.coinData.map( 
                        ({
                            handleRefresh,
                            name, 
                            ticker, 
                            balance,
                            currency, 
                            price
                        }) => 
                        <Coin 
                            key = {ticker}
                            handleRefresh = {props.handleRefresh}
                            name = {name} 
                            ticker = {ticker} 
                            balance = {props.showBalance ? balance : '***'}
                            currency = {currency} 
                            price = {price}
                        />
                    )
                }
            </tbody>
        </Table>
    )
}

