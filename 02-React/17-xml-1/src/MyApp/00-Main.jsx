import React, { Component } from 'react'
import './styles/00-main.css'
// const MyURL = "http://demo9622188.mockable.io/test"
// let MyURL = "http://localhost/ajax/01-countries-data.php"
// let MyURL = "http://localhost:5000/users"
// let MyURL = "http://localhost:5000/api/singers/"
let MyURL = "http://localhost:5000/api/singers/5aab446b0f66102c6131b83b"

export default class extends Component {

    state = { scon: '' }

    render(){

        const GET1 = () => {
            console.log("GET: to Mock-API-1")

            const xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    console.log('The response from the server: ')
                    // console.log('The server response: ', this.responseText)
                    console.log( this.response )
                }
            }

            xhttp.open("GET", MyURL, true)
            xhttp.send() 
        }


        const POST1 = () => {
            
        }



        return(
            <div>
                <h1>XML - TESTING - 3</h1>
                <hr/>

                <br/>
                <button onClick={GET1}>GET - XML API</button>
                <br/><br/>
                <hr/>

                <br/>
                <button onClick={POST1}>POST - XML API.</button>
                <br/><br/>
                <hr/>

            </div>
        )
    }
}
