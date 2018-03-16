import React from 'react'
import axios from 'axios'
import './style.css'

export default class extends React.Component{
    state = { name: '', findone: '', updateid: '', updatename: '', deleteid: '' }

    render(){

        const getAll = () => {
            console.log("GET all the singers:")

            axios.get('http://localhost:5000/api/singers')
                .then( (response) => { return response.data } )
                .then( (data) => { console.log(data) })
                .catch( (error) => { console.log(error) })
        }




        const getOne = () => {
            console.log("GET one by ID:")

            axios.get( 'http://localhost:5000/api/singers/' + this.state.findone )
                .then( (response) => { return response.data } )
                .then( (data) => { console.log(data) })
                .catch( (error) => { console.log(error) })

                this.setState({ findone: '' })
        }




        const post1 = () => {
            console.log("POST a new singer:")

            axios.post('http://localhost:5000/api/singers', {
                name: this.state.name
            })
                .then( (response) => { console.log(response) })
                .catch( (error) => { console.log(error) })

                this.setState({ name: '' })
        }




        const update1 = () => {
            console.log("UPDATE Singer Record:")

            axios.put('http://localhost:5000/api/singers/' + this.state.updateid, {
                name: this.state.updatename
            })
                .then( (response) => { console.log(response) })
                .catch( (error) => { console.log(error) })

                this.setState({ updateid: '', updatename: '' })
        }





        const delete1 = () => {
            console.log("DELETE Singer Record:")

            axios.delete( 'http://localhost:5000/api/singers/' + this.state.deleteid )
                .then( (response) => { console.log(response) })
                .catch( (error) => { console.log(error) })

                this.setState({ deleteid: '' })
        }





        return(
            <div>
                <h1>Tesgin API - 1</h1>
                <hr/>


                <div className="secWrap">
                    <h4>GET ALL</h4>
                    <button onClick={ getAll }>GET All Data</button>
                    <br/><br/>
                </div>

                <br/>
        

                <div className="secWrap">
                    <h4>GET ONE SINGER BY ID</h4>
                    <input type="text" value={this.state.findone} onChange={ (e) => { this.setState({ findone: e.target.value }) } }/>
                    <br/>
                    <button onClick={ getOne }>GET ONE</button>
                    <br/><br/>
                </div>

                <br/>

                <div className="secWrap">
                    <h4>POST A NEW SINGER</h4>
                    <input type="text" value={this.state.name} onChange={ (e) => { this.setState({ name: e.target.value }) } }/>
                    <br/>
                    <button onClick={ post1 }>POST</button>
                    <br/><br/>
                </div>

                <br/>

                <div className="secWrap">
                    <h4>UPDATE SINGER NAME</h4>
                    <input type="text" placeholder="ID of Singer to UPDATE" value={this.state.updateid} onChange={ (e) => { this.setState({ updateid: e.target.value }) } }/>
                    <br/>
                    <input type="text" placeholder="New Name" value={this.state.updatename} onChange={ (e) => { this.setState({ updatename: e.target.value }) } }/>
                    <br/>
                    <button onClick={ update1 }>UPDATE</button>
                    <br/><br/>
                </div>

                <br/>

                <div className="secWrap">
                    <h4>DELETE SINGER BY ID</h4>
                    <input type="text" value={this.state.deleteid} onChange={ (e) => { this.setState({ deleteid: e.target.value }) } }/>
                    <br/>
                    <button onClick={ delete1 }>DELETE</button>
                    <br/><br/>
                </div>

            </div>
        )
    }
}