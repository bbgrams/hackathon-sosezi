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
        <footer className="App-footer">
          개발자 소세지~~~~~~
       </footer>
      </div>
    );
  }
}

export default App;
