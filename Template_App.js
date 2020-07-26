import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';


let sum = 0;
for(let nom of [1,2,3,4,5]) {
  sum += nom;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange</h1>
        
        <p> Hi Daniel - deine erste App ist Online! </p>
        <p> Summe ist: {sum}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
