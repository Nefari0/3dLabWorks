import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
import ModelItem from './ModelItems'
import { projectManagement } from 'firebase-admin'

const db = app.firestore()

class Collections extends Component {

    constructor(){
        super();

        this.state = {
            items:[],
            fileUrl:null,
            file:null,
            imageFile:null,
            newItem:{}
        }
        this.sendIntoSpace = this.sendIntoSpace.bind(this)
        this.setFileUrl = this.setFileUrl.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.addFile = this.addFile.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.addToDatabase = this.addToDatabase.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    setFileUrl(params){
        console.log("set function")
        this.setState({ fileUrl:params})
        this.addToDatabase()
    }

    addFile(params){
        this.setState({file:params})
    }

    handleFile = async (e) => {
        const file = e.target.files[0];
        this.addFile(await file)
    }

    fileHandler = (params) => {
        const { file, imageFile } = this.state
        this.sendIntoSpace(file,imageFile)
    }

    sendIntoSpace = async (file,imageFile) => {
        const { id } = this.props.username.user
        const name = 'username'
        const description = 'stuff'
        const firebase_url = 'firebase_url'
        const firebase_url01 = this.state.fileUrl
        // const file = e.target.files[0];
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
            console.log("send to space function")
        fileRef.put(file).then(() => {
            console.log('uploaded file')
        })
        this.setFileUrl(await fileRef.getDownloadURL())
        console.log(this.state.fileUrl)
        
        // axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url}).then(res => {
        //     this.setState({ ...this.state,newItem:res.data})
        // })
    }

    addToDatabase = () => {
        const { id } = this.props.username.user
        const name = 'username'
        const description = 'stuff'
        const firebase_url = 'firebase_url'
        const firebase_url01 = this.state.fileUrl

        axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01})
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
                    
                    // onChange={e => this.sendIntoSpace(e)}
                    onChange={e => this.handleFile(e)} 
                    />

                    <input
                    type="file"
                    accept="image/png,image/jpeg"
                    />
                    
                    <button onClick={this.fileHandler}>submit</button>

                </section>
                <section className="items-view">
                    {mappedItems}
                </section>
  
            </div>
        )
    }
}

export default Collections