import React, { Component } from 'react'
import XML_Data1 from './xml-data/answer.xml'
const parseString = require('xml2js').parseString;
const xml2js = require('xml2js')

export default class extends Component{
    state = { xob: {} }
    render(){

        const Con1 = () => {
            console.log('XML to JS-OBJ')

            fetch(XML_Data1)
                .then((response) => { return response.text() })
                .then((response) => { return parseString(response, (err, result) => { this.setState({ xob: result }) } ) })

                setTimeout(() => { console.log( this.state.xob ) }, 500) 
        }


        const Con2 = () => {
            console.log('JS-OBJ to XML ')

            let myBuilder = new xml2js.Builder()
            let myXML = myBuilder.buildObject(this.state.xob)
            console.log(myXML)
        }

        return(
            <div>
                <h1>Long XML Conversions</h1>
                <hr/>

                <button onClick={Con1} >XML to JS-OBJ</button>
                <br/><br/>

                <button onClick={Con2} >JS-OBJ to XML</button>
            </div>
        )
    }
}