import React from 'react'

export default class extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                <h3>Senator</h3>
                <p>Name: { this.props.info.person.name }</p>
                
            </div>
        )
    }
}