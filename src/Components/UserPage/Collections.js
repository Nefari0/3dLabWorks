import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'

class Collections extends Component {
    constructor(){
        super();

        this.state = {
            items:[],
        }
        // this.onChange = this.onChange.bind(this)
        this.sendIntoSpace = this.sendIntoSpace.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    // sendIntoSpace(params){
    //     const file = e.target.file[0];
    //     const storageRef = app.storage().ref()
    //     const fileRef = storageRef.child(file.name)
    //     fileRef.put(file).then(() => {
    //         console.log("uploaded a file")
    //     })
    // }

    sendIntoSpace(file){
        console.log(file)
        // const file = params;
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file)
        fileRef.put(file).then(() => {
            console.log("uploaded a file")
        })
    }

    handleChange(params){
        this.setState({ file:params })
    }

    render(){

        const { items } = this.state


        const mappedItems = items.map(element => {
            return <UserProject key={element.model_id} />
        })

        return(
            <div className="collections">
                <h2>Collections</h2>
                <input 
                type="file"
                // onChange={e => this.sendIntoSpace(e.target.file[0])}
                onChange={e => this.sendIntoSpace(e.target.files[0])}
                />
                {mappedItems}
            </div>
        )
    }
}

export default Collections