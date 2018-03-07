import React from 'react'
import * as MyProm from './02-Promises'
import MyMath from './03-Calculator'

export default class extends React.Component{


    myFun1(){
        console.log('Hello from Fun1')
        // console.log( MyProm.resolvingValues(" James Bond ") )
        // console.log( MyProm.rejectedPromise())
        console.log( MyProm.conditionallyReject(-7))
    }

    myCal(){
        console.log("Hello from Cal...");
        // console.log( MyMath.add(1, 2, 3) )
        console.log( MyMath.subtract(3, 2, 3, 2) )
        
    }


    render(){
        return(
            <div>
                <h1>Hello from Here.... 1</h1>
                <br/>
                
                <button onClick={this.myCal.bind(this)} >Promises HW</button>
                
            </div>
        )
    }
}