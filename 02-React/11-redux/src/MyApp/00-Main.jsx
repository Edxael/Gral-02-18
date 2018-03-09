import React from 'react'
import { Home } from './99-MyExports'
import { createStore } from 'redux'

const reducer = (state, action) => { 
    if(action.type === 'changeState'){ return action.payload.newState }
    return 'Initial State' 
}
const store = createStore(reducer)
const action = {
        type: 'changeState',
        payload: {newState: "New & Updated State..." }
      }




export default class extends React.Component{

    exe1(){
        store.dispatch(action)
        console.log(store.getState())
    }

    render(){
        console.log(store.getState())
        return(
            <div>
                <Home />
                <br/>
                <button onClick={this.exe1.bind(this)}>Change State.</button>
            </div>
        )
    }
}