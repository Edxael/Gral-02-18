import React from 'react'
// let MyURL = 'http://localhost:5000/'


export default class extends React.Component{


    getAll(){
        console.log("GET-ALL-2")

    }



    render(){
        return(
            <div>
                <h1>Main.jsx ..</h1>
                <button onClick={this.getAll.bind(this)}>GET DATA...</button>
            </div>
        )
    }
    
} 



            









// getUsers = async () => {
//     debugger
//     const response = await fetch(MyURL, {mode: 'no-cors'})
//     debugger
//     const users = await response.json()
//     console.log(users)
// }


// fetch(MyURL, { method: "GET" })
// .then((data1) => { console.log( data1 ) } )


// fetch(MyURL, {mode: 'no-cors'})
//     .then((data1) => (data1.json()) )
//     .then(data => console.log(data))
//     .catch((err) => { console.log(err) })