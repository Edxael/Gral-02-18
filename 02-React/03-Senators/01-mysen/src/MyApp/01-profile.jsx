import React from 'react'

export default class extends React.Component{
    render(){
        return(
            <div>
                <p>Testing</p>
                <h3>{this.props.info.phone}</h3>
            </div>
        )
    }
}