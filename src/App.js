import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Datas from './RequestData/index.js';
import TestArr from './TestArray/index.js';
// import MainNav from './MainNav/index.js';
import Test from './TestArguments/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test/>
        <Datas/>
      </div>
    );
  }
}

export default App;
