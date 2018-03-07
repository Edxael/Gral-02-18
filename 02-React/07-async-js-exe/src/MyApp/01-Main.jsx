import React from 'react'
import * as MyProm from './02-Promises'

export default class extends React.Component{


    runPromise = async () => {
        console.log('Runing Promise')
        
        // const data1 = MyProm.resolvingValues("Elena")
        // const data1 = MyProm.rejectedPromise("Elena")
        const data1 = MyProm.conditionallyReject(-1)

        console.log( data1 )
    }

    
    render(){
        return(
            <div>
                <h1>Hello from Here.... 2</h1>
                <br/>
                <button onClick={this.runPromise.bind(this)}>Run Promise</button>
            </div>
        )
    }
}