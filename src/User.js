import React, { Component } from "react";
import api from "./api.js";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgUrl: "",
      modified: false
    };
  }

  async data() {
    // 유저 프로필 사진 이후 색상 이미지로 교체 예정
    const { data: colors } = await api.get("/colors");
    this.setState({
      imgUrl: colors[0].colorImgUrl
    });
  }

  handleModify(value) {
    this.setState({
      name: value,
      modified: !this.state.modified
    });
  }

  render() {
    this.data();
    const imgUrl = this.state.imgUrl;

    return (
      <div className="user-container">
        <img src={imgUrl} />
        {this.state.modified === false ? (
          <p>{this.state.name}</p>
        ) : (
          <input type="text" name="nickname" />
        )}
        <button
          onClick={e =>
            this.handleModify(e.target.previousElementSibling.value)
          }
        >
          수정
        </button>
      </div>
    );
  }
}
