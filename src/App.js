import React, { Component } from 'react';
import './App.css';
import User from './User';
import Animal from './Animal';
import Main from './Main';
import LoginForm from './LoginForm'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: localStorage.getItem("token") ? "main" : "login"
    };
  }

  handleLogin() {
    this.setState({
      page: "main"
    });
  }

  handleLogout() {
    this.setState({
      page: "login"
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <User />
          <Animal />
        </header>
        <main className="App-main">
        {this.state.page === "login" ? (
          <LoginForm onLogin={() => this.handleLogin()} />
        ) : this.state.page === "main" ? (
          <Main onLogout={() => this.handleLogout()} />
        ) : null}
        </main>
      </div>
    );
  }
}

export default App;
