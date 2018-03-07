import React from 'react'
import * as MyProm from './02-Promises'
import MyMath from './03-Calculator'

export default class extends React.Component{


    runPromise = async () => {
        console.log('Runing Promise')
        
        // const data1 = await MyProm.resolvingValues("Edmundo")
        // const data1 = await MyProm.rejectedPromise("Edmundo")
        const data1 = await MyProm.conditionallyReject(-1)

        console.log( data1 )
    }


    runCalculator = async () => {
        console.log("From Calculator")
        
        // const data2 = await MyMath.add(1, 2, 3, 4)
        const data2 = await MyMath.subtract(3, 2, 3, 2)
        console.log(data2)
    }


    render(){
        return(
            <div>
                <h1>Hello from Here.... 2</h1>
                <br/>
                <button onClick={this.runPromise.bind(this)}>Run Promise</button>
                <br/><br/>

                <button onClick={this.runCalculator.bind(this)} >Run Calculator</button>
            </div>
        )
    }
}