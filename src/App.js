import React from 'react';
import './App.css';
import Tickets from './tickets';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Zendesk Logo" className="logo-img" />
        <h1>Open Tickets</h1>
      </header>
      <Tickets />
    </div>
  );
}

export default App;
