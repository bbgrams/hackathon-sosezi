import React, { Component } from "react";
import api from './api'
import Baby from './Baby'
export default class Animal extends React.Component {
  render(){
    return (
    <div className="animal-wrap">
        <Baby />
    </div>
    )
  }
}
