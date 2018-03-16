import React, { Component } from 'react'
// const MyURL = 'https://api.intacct.com/ia/xml/xmlgw.phtml'
// const MyURL = 'http://www.xmlsoccer.com/FootballDataDemo.asmx!/CheckApiKey'

export default class extends Component {
    render(){

        const CallAPI = () => {
            console.log("Calling the API...")

            var data = JSON.stringify({
                "foo": "bar"
              });
              
              var xhr = new XMLHttpRequest();
              xhr.withCredentials = true;
              
              xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                  console.log(this.responseText);
                }
              });
              
              xhr.open("POST", "http://mockbin.com/request?foo=bar&foo=baz");
              xhr.setRequestHeader("cookie", "foo=bar; bar=baz");
              xhr.setRequestHeader("accept", "application/json");
              xhr.setRequestHeader("content-type", "application/json");
              xhr.setRequestHeader("x-pretty-print", "2");
              
              xhr.send(data);

            
        }

        return(
            <div>
                <h1>XML - TESTING</h1>
                <button onClick={CallAPI}>Call XML</button>
            </div>
        )
    }
}




// http://localhost:5000/api/singers/

// https://<your-host-or-IP>:8443/enterprise/control/agent.php



// const CallAPI = () => {
//     console.log("Calling the API...")

//     const XMLCall = new XMLHttpRequest()
//     XMLCall.onreadystatechange = () => {
//         if(XMLCall.readyState === XMLHttpRequest.DONE){
//             console.log("The XML response: ", XMLCall.responseText)
//         }else{
//             console.log("It was nt Ready")
//         }
//     }

//     XMLCall.open('GET', MyURL, true)

//     XMLCall.send(null)    
// }