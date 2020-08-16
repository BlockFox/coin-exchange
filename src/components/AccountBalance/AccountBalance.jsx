import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    color: greenyellow;
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`; 

const Button = styled.button`
    margin: 10px auto 0 auto;
    float: left;
    border: none;
    background-color: #282c34;
    color: #61dafb;
    font-size: 1.4rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export default function AccountBalance(props) {

    const handleBalanceButton = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
        props.toggleBalance();
    }

    const buttonText = props.showBalance ? ' HideBalance' : ' Schow Balance';
        
    const toggleBalance = props.showBalance ?
       <span>{props.currency}{props.amount}</span> : '***';
    
       return (
            <>
            <Section className="accountbalance">
                <div>
                    <strong>Your Balance is : </strong> {toggleBalance}
                </div>
                <div>
                    <Button onClick= {handleBalanceButton}>{buttonText}</Button>
                </div>
            </Section>
            </>
        )
    }

AccountBalance.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired

}
