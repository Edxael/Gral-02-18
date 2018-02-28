import React, { Component } from 'react';
import './App.css';



export default class App extends Component {

  

  render() {

    let singers = [ {name: 'Ayumi Hamasaki', coountry: 'Japan'}, 'sistar']
    return (
      <div className="App">
        <h1>Hello...</h1>
        <p>Name: { singers[0].coountry }</p>
      </div>
    )
  }
}

