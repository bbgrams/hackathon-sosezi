import React, { Component } from "react";
import api from "./api";
export default class Baby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      imgUrl : "",
      age : 0,
      birth : "",
      gender : "",
      animal : "",
      favorite : ""
    }
  }
  async componentDidMount() {
    // 화면이 표시되는 순간에
    // https://groovy-smile.glitch.me/babys/2?_embed=infos
    const res = await api.get('/babys/2?_embed=infos');
    console.log(res.data)
  }
  render(){

    return (
        <dl className="baby-wrap">
          <dt>초심</dt>
          <dd>
            <ul>
              <li>
                <figure>
                  <img src="https://cdn.glitch.com/e255d7ab-b36c-4d2d-8f00-437b3f8ae69c%2FUNADJUSTEDNONRAW_thumb_516.jpg?1542337530354" />
                </figure>
                <figcaption></figcaption>
              </li>
              <li>
                Age : <span>1</span>
              </li>
              <li>
                Birth : <span>1</span>
              </li>
              <li>
                Gender : <span>1</span>
              </li>
              <li>
                Animal : <span>1</span>
              </li>
              <li>
                Favorite : <span>1</span>
              </li>
            </ul>
          </dd>
        </dl>
    )
  }
}
