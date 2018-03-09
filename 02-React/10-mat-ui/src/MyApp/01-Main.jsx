import React from 'react'
import { Header, Footer } from './MatComps/00-MyExports'

export default class extends React.Component{
    render(){
        return(
            <div>
                <p>Hello from the Main comp</p>

                <Header />
                <Footer />

            </div>
        )
    }
}