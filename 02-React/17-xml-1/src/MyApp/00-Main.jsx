import React, { Component } from 'react'
import './styles/00-main.css'
// const MyURL = "http://demo9622188.mockable.io/test"
let MyURL = "http://localhost/ajax/01-countries-data.php"

export default class extends Component {

    state = { scon: '' }

    render(){

        const CallAPI = () => {
            console.log("Calling the API... 07")
        }



        return(
            <div>
                <h1>XML - TESTING - 1</h1>
                <hr/>
                <button onClick={CallAPI}>Call XML API</button>

    

            </div>
        )
    }
}


