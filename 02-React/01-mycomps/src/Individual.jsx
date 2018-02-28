import React, { Component } from 'react'

export default class extends Component{
    render(){
        return(
            <div>
                <p>Singer Name: { this.props.name }</p>
            </div>
        )
    }
}