import React, { Component } from "react"; //리액트 코드는 제일 위에 이 코드가 항상 있어야함.
import api from "./api";

export default class LoginForm extends Component {
    async handleSubmit(e) {
      e.preventDefault();
  
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
  
      const res = await api.post("/users/login", {
        username,
        password
      });
  
      localStorage.setItem("token", res.data.token); //로그인 된 순간!
      this.props.onLogin(); // 부모 상태를 바꿔주기 위해서 작성한 함수를 prop으로 받았으므로 해당 함수를 실행!
    }
  
    render() {
      return (
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>전송</button>
        </form>
      );
    }
  }