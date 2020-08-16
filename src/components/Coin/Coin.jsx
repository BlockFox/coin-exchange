import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableData = styled.td`
    border: 1px solid #cccccc;
    width: 10vh;
    `;

const Button = styled.button`
    height: 2rem;
    width: 100%;
    background-color: #282c34;
    color: #61dafb;
    border: none;
    font-size: 1rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export default function Coin(props) {

    
    const refreshPrice = (event) => {
        // Prevent default action of submittin gthe form
        event.preventDefault();

        //call handle method given via props from parent component
        props.handleRefresh(props.ticker);
    }

        return (
            
            <tr className ="coin-row">
                <TableData>{props.name}</TableData>
                <TableData>{props.ticker}</TableData>
                <TableData>{props.balance}</TableData>
                <TableData>{props.currency}{props.price}</TableData>
                <TableData>
                    <Button onClick = { refreshPrice}>Refresh</Button>
                </TableData>
            </tr>
            
        )

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired

}
