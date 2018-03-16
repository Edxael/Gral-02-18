import React from 'react'
import axios from 'axios';

export default class extends React.Component{
    render(){

        const exe1 = () => {
            console.log("Hello from exe1")

            axios.get('http://localhost:5000/api/singers')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            // axios.request({ method: 'get', url: "http://localhost:5000/api/singers"})
            //     .then((response) => { console.log( response ) })
            //     .catch((error) => {console.log( error ) })
        }

        return(
            <div>
                <h1>Tesgin API - 1</h1>
                <hr/>
                <button onClick={ exe1 }>Get Data</button>
            </div>
        )
    }
}