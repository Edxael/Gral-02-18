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

        const getCountries = (e) => {
            console.log("Runing getCountries")

            this.setState({ scon: this.menu.value })

            setTimeout(() => { 
                console.log(this.state.scon) 

                let xhr = new XMLHttpRequest()

                MyURL = MyURL + "?continent=" + this.state.scon
                console.log( MyURL )

                xhr.open("GET", MyURL , true)
                xhr.send()

                
                xhr.onreadystatechange = function() {
                    if(this.readyState === 4 && this.status === 200){
                        console.log("Paso la prueva");
                        
                        // console.log( xhr.responseText )
                    }
                }

                
            
                MyURL = "http://localhost/ajax/01-countries-data.php"
                this.setState({ scon: '' })
            }, 100)

            

            


        }

        return(
            <div>
                <h1>XML - TESTING - 1</h1>
                <hr/>
                <button onClick={CallAPI}>Call XML API</button>

                <div className='countries1' >

                    <select id="continents" onChange={getCountries} ref = {(input)=> this.menu = input} >
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="n-america">North America</option>
                        <option value="s-america">South America</option>
                        <option value="australia">Australia</option>
                    </select>

                </div>

            </div>
        )
    }
}


