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
    console.log('1')
    const res = await api.get('/comments');
    const memos = res.data;
    console.log(memos);
    this.setState({
      memos
    })
  }
  render() {
    return (
      <ul className="memo-wrap">
        {this.state.memos.map(memo => (
          <li key={memo.id}>{memo.body}</li>
        ))}
      </ul>
    )
  }
}
