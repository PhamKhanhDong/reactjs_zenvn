import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  test = (test="KD") => {
    return(<div>{test}</div>);
  }

  render() {
    return (
      <div className="App">
        {this.test("afalkdfjkfn")}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to KD</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
