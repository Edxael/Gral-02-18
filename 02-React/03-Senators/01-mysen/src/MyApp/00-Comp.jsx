import React from 'react'
import Data from './Data/senators'
import Profile from './01-profile'

export default class extends React.Component{   

    ShowSen(){
        console.log(Data)

        const toPrint = Data
                        .filter( (x) => { return x.party === "Republican" } )
                        .map( (z) => { return <Profile key={z.phone} info={z} /> } )

        console.log(toPrint);

        return toPrint
        
    }

    render(){
        return(
            <div>
                <h1>Senators 1</h1>
                <div>{ this.ShowSen() }</div>
            </div>
        )
    }
}
