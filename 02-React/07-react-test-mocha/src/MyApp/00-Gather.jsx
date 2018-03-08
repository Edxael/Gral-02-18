import React from 'react'
import MyMath from './Math/calc.js'

export default class extends React.Component{

    Exe1(){
        console.log("Hello from Exe1");
        console.log( MyMath(2, 7) )
    }

    render(){
        return(
            <div>
                <h1>Hello from gather.</h1>
                <br/>

                <button onClick={this.Exe1.bind(this)} >Execute</button>
            </div>
        )
    }
}