import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {

    constructor(props){
        super(props);
        this.state = {
            currency: this.props.currency,
            price: this.props.price
        }
        this.refreshPrice = this.refreshPrice.bind(this);
    }

    randomPercentage(){
        return 0.995 + Math.random()*0.01;
    }

    setRandomPrice(){
        this.setState( function(oldState) {
            return{
                currency: "$",
                price: this.state.price * this.randomPercentage()
            }
        });
    }


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

        this.setRandomPrice();
    }



    render() {
        return (
            <tr className ="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.state.currency}{this.state.price}</td>
                <td>
                    <button onClick = { this.refreshPrice}>Refresh</button>
                </td>
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
