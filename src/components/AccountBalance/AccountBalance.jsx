import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    color: greenyellow;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`; 

export default class AccountBalance extends Component {

    constructor(props){
        super(props);
        this.state = {
            currency: this.props.currency,
            amount: this.props.amount
        }
    }



    render() {
        return (
            <Section className="accountbalance">
                Your Balance is: {this.state.currency}{this.state.amount}
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired

}
