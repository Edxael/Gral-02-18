import React, { Component } from 'react';
import './App.css';
import Individual from './Individual'


export default class App extends Component {

  exe1(){
    let singers = [ 'Ayumi Hamasaki', 'Sistar', 'Exid', 'Taeyang']
    return singers.map((x) => { return <Individual name={x} /> })
  }
  

  render() {

    
    return (
      <div className="App">
        <h1>Hello...</h1>
        { this.exe1() }
      </div>
    )
  }
}

