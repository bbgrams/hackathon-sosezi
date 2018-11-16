import React, { Component } from "react";
import api from "./api";

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view : true,
      memos : []
    }
  }
  async componentDidMount() {
    const res = await api.get('/comments');
    const memos = res.data;
    this.setState({
      memos
    })
  }

  async handleMemo(value){
    await api.post("/comments", {
        body: value,
    });

    const res = await api.get('/comments');
    const memos = res.data;

    this.setState({
      memos
    })
  }

  render() {
    return (
      <div className="memo-container">
        <div className ="memo-area">
          <input type="text" name="memo"/>
          <button   onClick={e =>
          this.handleMemo(e.target.previousElementSibling.value)
          }>등록</button>
        </div>
        <ul className="memo-wrap">
          {this.state.memos.reverse().map(memo => (
            <li key={memo.id}>{memo.body}</li>
          ))}
        </ul>
      </div>
    )
  }
}
