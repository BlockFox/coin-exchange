import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableData = styled.td`
    border: 1px solid #cccccc;
    width: 10vh;
    `;


export default class Coin extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     currency: this.props.currency,
        //     price: this.props.price
        // }
        // console.log(props);
        this.refreshPrice = this.refreshPrice.bind(this);
    }

    // randomPercentage(){
    //     return 0.995 + Math.random()*0.01;
    // }

    // setRandomPrice(){
    //     this.setState( function(oldState) {
    //         return{
    //             currency: "$",
    //             price: this.state.price * this.randomPercentage()
    //         }
    //     });
    // }


   /* 
    componentDidMount(){
        const callbackIntervall = () =>{
            // set state of new random value -> chaged: call function instead
            //const randomPercentage = this.randomPercentage();

            // short version to solve -> direkt input of Object
            // this.setState({price: this.state.price * randomPercentage});
            
            // version with function 
            // -> so you also can react on click button or something else and then return the object

            this.setRandomPrice();
            
        }
        setInterval(callbackIntervall, 1000);
    }
    
    */

    refreshPrice (event) {
        // Prevent default action of submittin gthe form
        event.preventDefault();

        // this.setRandomPrice();
        // -> osolet

        //call handle method given via props from parent component
        this.props.handleRefresh(this.props.ticker);
    }



    render() {
        return (
            
            <tr className ="coin-row">
                <TableData>{this.props.name}</TableData>
                <TableData>{this.props.ticker}</TableData>
                <TableData>{this.props.currency}{this.props.price}</TableData>
                <TableData>
                    <button onClick = { this.refreshPrice}>Refresh</button>
                </TableData>
            </tr>
            
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}
