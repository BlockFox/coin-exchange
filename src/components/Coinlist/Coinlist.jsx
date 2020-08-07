import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
  `;


export default class Coinlist extends Component {
    render() {
        return (
            <Table className = "Coin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                    </tr>
                </thead>
                    <tbody id= "btc_table">
                    {
                        this.props.coinData.map( ({name, ticker, currency, price}) => 
                        <Coin 
                            key = {ticker}
                            name = {name} 
                            ticker = {ticker} 
                            currency = {currency} 
                            price = {price}
                        />
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
