import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import Animal from './Animal';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <User />
          <Animal />
        </header>
        <main className="App-main">
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
