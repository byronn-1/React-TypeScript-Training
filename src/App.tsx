import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

//tuple
  let aTuple: [string, number] = ['Byron', 34];

//enum
  enum Codes { first = 1, second = 2 };

//any
  let firstName: any = 3;

//void
  const warning = (): void => {
    console.log('Warning');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The value { aTuple[0] } is of { typeof aTuple[0]} type!
        <br />
        </p>
      </header>
    </div>
  );
}

export default App;
