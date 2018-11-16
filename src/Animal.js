import React, { Component } from "react";
import api from './api'
import Baby from './Baby'

export default class Animal extends React.Component {
  constructor(props){
    super(props)
    this.state={
      babys: [],
      info: false
    }
  }

  async componentDidMount(){
    const {data: babys} = await api.get('/babys')

    this.setState({
      babys
    })
  }

  render(){
    return (
    <div className="animal-wrap">
        {this.state.babys.map(baby => (
          <dl className="baby-board" key={baby.id}>
            <dt className="baby-name">{baby.name}</dt>
            <Baby babyId={baby.id}/>
          </dl>
        ))}
    </div>
    )
  }
}
