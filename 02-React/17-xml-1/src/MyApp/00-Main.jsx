import React, { Component } from 'react'
// const MyURL = "http://demo9622188.mockable.io/test"

export default class extends Component {
    render(){

        const CallAPI = () => {
            console.log("Calling the API... 07")

            
        }

        return(
            <div>
                <h1>XML - TESTING - 1</h1>
                <hr/>
                <button onClick={CallAPI}>Call XML API</button>

                <div onChange={CallAPI}>
                    <input type="text"/>
                </div>
            </div>
        )
    }
}


