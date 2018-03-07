import React from 'react'
let myURL = "https://swapi.co/api/films"

export default class extends React.Component{



    exe1 = async () => {

        const data1 = await fetch(myURL)
        const data2 = await data1.json()
        const data3 = data2.results

        console.log( data3 )
        
  
    }

    render(){
        return(
            <div>
                <h1>StarWars  --  API  - 2</h1>
                <button onClick={this.exe1.bind(this)} >Execute API</button>
            </div>
        )
    }
}


// const data1 = await fetch(myURL, {method: "GET"})
// const data2 = await data1.json()
                
// await console.log(data2);

// .then((x) => { return x.json() })