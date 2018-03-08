import React from 'react'
import * as MyMath from './Math/01-Calc.js'

export default class extends React.Component{

    Exe1(){
        console.log("Hello from Exe1");
        console.log( MyMath.add(2, 6) )
    }

    render(){
        return(
            <div>
                <h1>Hello from gather</h1>
                <br/>

                <button onClick={this.Exe1.bind(this)} >Execute</button>
            </div>
        )
    }
}