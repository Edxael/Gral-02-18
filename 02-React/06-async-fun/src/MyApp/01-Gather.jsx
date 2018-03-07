import React from 'react'
let myURL = "https://swapi.co/api/films"

export default class extends React.Component{

    state = { movies: [], show: false }


    getData = async () => {
        console.log("Executing getData()");
        
        const data1 = await fetch(myURL)
        const data2 = await data1.json()
        const data3 = await data2.results
        console.log( "Data-3: ", data3 , " \n.")

        this.setState({ movies: data3, show: true })
    }


    showData = () => {
        console.log('Execting ShowData()')
        console.log( "State.Movs: ", this.state.movies );
        return this.state.movies.map( (film) => { return <h4 key={film.title} >Movie: { film.title }</h4> } )
    }


    render(){
        return(
            <div>
                <h1>StarWars  --  API  - 2</h1>
                <button onClick={this.getData.bind(this)} >Execute API</button>
                <br/>
                <hr/>

                <div>
                    { this.state.show ? React.createElement(this.showData) : <div>Movies Here..</div> }
                </div>
            </div>
        )
    }
}
