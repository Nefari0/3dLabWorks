import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
import ModelItem from './ModelItems'

const db = app.firestore()

class Collections extends Component {

    constructor(){
        super();

        this.state = {
            items:[],
            fileUrl:null
        }
        this.sendIntoSpace = this.sendIntoSpace.bind(this)
        this.setFileUrl = this.setFileUrl.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    setFileUrl(params){
        console.log("set function")
        this.setState({ fileUrl:params})
    }

    sendIntoSpace = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
            console.log("send to space function")
        fileRef.put(file).then(() => {
            console.log('uploaded file')
        })
        this.setFileUrl(await fileRef.getDownloadURL())
    }

    handleChange(params){
        this.setState({ file:params })
    }

    render(){

        const { items } = this.state


        const mappedItems = items.map(element => {
            return <ModelItem key={element.model_id} name={element.name} img={element.firebase_url01}/>
        })

        return(
            <div className="collections">
                <section className="input">
                    <div className="collections-h2"><h2 >Collections</h2></div>
                    <input 
                    type="file"
                    onChange={e => this.sendIntoSpace(e)}
                    />

                </section>
                <section className="items-view">
                    {mappedItems}
                </section>
  
            </div>
        )
    }
}

export default Collections