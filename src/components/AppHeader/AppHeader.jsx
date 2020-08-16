import React  from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

  const Img = styled.img`
    height: 8rem;
    pointer-events: none;
  `;
  
  
  const H1 = styled.h1`
    font-size: 5rem;
  `;
  
  const Header = styled.header` 
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  


export default function AppHeader(props) {
      return (
      <Header className="App-header">
        <Img src={logo} className="App-logo" alt="logo" />
        <H1 className ="App-title">Coin Exchange</H1>
      </Header>
      )
}
