import React, { Component } from 'react'
// const MyURL = 'https://api.intacct.com/ia/xml/xmlgw.phtml'
// const MyURL = 'http://www.xmlsoccer.com/FootballDataDemo.asmx!/CheckApiKey'
const MyURL = "http://demo9622188.mockable.io/test"

export default class extends Component {
    render(){

        const CallAPI = () => {
            console.log("Calling the API...")

            const xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(this.responseText)
                }
            }

            xhttp.open("GET", MyURL, true)
            xhttp.send();
            
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


