import React from 'react'
import * as DataFilters from './Data/01-SenFilters'

export default class extends React.Component{

    exe1(){
        console.log("Hello from Exe1")
        // console.log( DataFilters.allSen() )
        // console.log( DataFilters.basicData() )
        // console.log( DataFilters.byState("FL") )
        console.log( DataFilters.myStateSr() )
    }

    render(){
        return(
            <div>
                <h1>Senators Filters</h1>
                <div>{ this.exe1() }</div>
            </div>
        )
    }
}