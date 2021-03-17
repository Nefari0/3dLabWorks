import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
import ModelItem from './ModelItems'
import { projectManagement } from 'firebase-admin'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer'

const db = app.firestore()

class Collections extends Component {

    constructor(){
        super();

        this.state = {
            items:[],
            fileUrl:null,
            file:null,
            imageFile:null,
            imageUrl:null,
            newItem:{},
            props:null
        }
        this.sendIntoSpace = this.sendIntoSpace.bind(this)
        this.sendImageIntoSpace = this.sendImageIntoSpace.bind(this)
        this.setFileUrl = this.setFileUrl.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.addFile = this.addFile.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.addToDatabase = this.addToDatabase.bind(this)
        // this.deleteModel = this.deleteModel.bind(this)
    }

    componentDidMount(){
        const { id } = this.props.user.user
        axios.get(`/api/projects/${id}`).then(res =>
            this.setState({ ...this.state,items:res.data})) 
        // this.props.getProjects()
            
    }

    setFileUrl(params){
        const { imageFile } = this.state
        console.log("set function")
        this.setState({ fileUrl:params})
        this.addToDatabase()        
    }

    setImageUrl(params){
        this.setState({imageUrl:params})
    }

    addFile(params){
        this.setState({file:params})
    }

    addPhoto(params){
        this.setState({imageFile:params})
    }

    handleFile = async (e) => {
        const file = e.target.files[0];
        this.addFile(await file)
    }

    handlePhoto = async (e) => {
        const photo = e.target.files[0]
        this.addPhoto(await photo)
    }

    fileHandler = async (params) => {
        const { file, fileUrl, imageFile, imageUrl } = this.state
        const image = true
        this.sendIntoSpace(file)
        if(imageFile != null){
            this.sendImageIntoSpace(imageFile)
        } else {alert('please add a photo')}

        this.addToDatabase(await fileUrl,imageUrl)
        
    }

    sendIntoSpace = async (file) => {
        const { id } = this.props.username.user
        const name = 'username'
        const description = 'stuff'
        const firebase_url = 'firebase_url'
        const firebase_url01 = this.state.fileUrl
        // const file = e.target.files[0];
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
            console.log("send to space function",fileRef)
        fileRef.put(file).then(() => {
            console.log('uploaded file')
        })
        this.setFileUrl(await fileRef.getDownloadURL())
        console.log('this is file storageRef',fileRef)
        // console.log('this is file storageRef',storageRef.child())
        
        // axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01}).then(res => {
        //     this.setState({ ...this.state,newItem:res.data})
        // })
    }

    sendImageIntoSpace = async (file) => {
        // const { id } = this.props.username.user
        // const name = 'username'
        // const description = 'stuff'
        // const firebase_url = 'firebase_url'
        // const firebase_url01 = this.state.fileUrl
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
        console.log('this is from addToDatabase function')
        const { fileUrl, imageUrl } = this.state
        const { id } = this.props.username.user
        const name = 'username'
        const description = 'stuff'
        const firebase_url = imageUrl
        const firebase_url01 = fileUrl
        axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01})
        this.setState({fileUrl:null,file:null})
    }

    handleChange(params){
        this.setState({ file:params })
    }

    // deleteModel = (params) => {
    //     console.log('this is params from delete model',params)
    //     axios.delete(`/api/project/delete/${params}`)
    // }

    render(){

        const { items } = this.state

        const mappedItems = items.map(element => {
            return <ModelItem key={element.model_id} name={element.name} img={element.firebase_url01} id={element.model_id} delete={this.deleteModel}/>
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

                    {/* <input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={e => this.handlePhoto(e)}
                    /> */}
                    
                    <button onClick={this.fileHandler}>submit</button>
                    <button onClick={this.getAllProjects}>get redux</button>

                </section>
                <section className="items-view">
                    {mappedItems}
                </section>
  
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {getProjects})(Collections)

// export default Collections