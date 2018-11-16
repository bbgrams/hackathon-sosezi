import React from "react";
import api from "./api";

export default class Baby extends React.Component {
  constructor(props){
    super(props)
    this.state={
      age : 0,
      birth : "",
      gender : "",
      animal : "",
      favorite : "",
      imgUrl: ""
    }
  }

  async data() {
    // 유저 프로필 사진 이후 색상 이미지로 교체 예정
    const {data: [info]} = await api.get("/infos",{
      params: {
        babyId: this.props.babyId
      }
    });

    this.setState({
      age : info.age,
      birth : info.birth,
      gender : info.gender,
      animal : info.animal,
      favorite : info.favorite,
      imgUrl: info.imgUrl
    });
  }

  render(){
    this.data()
    const {age, birth, gender, animal, favorite, imgUrl} = this.state
    return (
      <dd>
        <ul>
          <li>
            <figure>
                <img src={imgUrl} />
              </figure>
                <figcaption></figcaption>
              </li>
              <li>
                Age : {age}
              </li>
              <li>
                Birth : {birth}
              </li>
              <li>
                Gender : {gender}
              </li>
              <li>
                Animal : {animal}
              </li>
              <li>
                Favorite : {favorite}
              </li>
            </ul>

          </dd>
    )
  }
}



