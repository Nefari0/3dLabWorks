import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
import ModelItem from './ModelItems'
import { projectManagement } from 'firebase-admin'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer'
import AddProject from './AddProject'

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
        // this.sendImageIntoSpace = this.sendImageIntoSpace.bind(this)
        this.setFileUrl = this.setFileUrl.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.addFile = this.addFile.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.addToDatabase = this.addToDatabase.bind(this)
        this.fileHandlerRemove = this.fileHandlerRemove.bind(this)
        this.removeFileFromSpace = this.removeFileFromSpace.bind(this)
        // this.removeFileFromSpace2 = this.removeFileFromSpace2.bind(this)
        // this.deleteModel = this.deleteModel.bind(this)
    }

    componentDidMount(){
        const { id } = this.props.user.user
        axios.get(`/api/projects/${id}`).then(res =>
            this.setState({ ...this.state,items:res.data})) 
        // this.props.getProjects()
            
    }

    setFileUrl = async (params1,params2) => {
        // const { imageFile } = this.state
        // console.log("set file function")
        this.setState({ fileUrl:params1,imageUrl:params2})
        // this.addToDatabase()        
    }

    setImageUrl(params){
        // console.log('set image function')
        this.setState({imageUrl:params})
        // this.addToDatabase()
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
        this.sendIntoSpace()
        // if(imageFile != null){
        //     this.sendImageIntoSpace(imageFile)
        // } else {alert('please add a photo')}

        // this.addToDatabase(await fileUrl,imageUrl)
        
    }

    fileHandlerRemove = (params) => {
        this.setState({file:null})
    }

    handleDelete = (params) => {
        this.setState({imageFile:null})
    }

    sendIntoSpace = async () => {
        const { file, imageFile } = this.state
        const { id } = this.props.username.user
        const name = 'username'
        const description = 'stuff'
        const firebase_url = 'firebase_url'
        const firebase_url01 = this.state.fileUrl
        // const file = e.target.files[0];

        // this block needs to be moved to backend/controller. once backend is funtional, it will be deleted.

        // ---- this uploads file to firebase ---- //
        // if (file != null){
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
            console.log("send to space function")
            console.log("storageRef items",storageRef)
            console.log("fileRef items",fileRef)
        fileRef.put(file).then(() => {
            console.log('uploaded file',file)
        })
        // this.setFileUrl(await fileRef.getDownloadURL())
        // console.log('this is file fileRef',fileRef)
        // }
        // ------------------------------------------ //
        
        // ---- this uploads image to firebase ---- //
        // if (imageFile != null) {
            const storageRef2 = app.storage().ref()
            const fileRef2 = storageRef2.child(imageFile.name)
            fileRef2.put(imageFile).then(() => {
                console.log('uploaded image file')
            })
            // this.setImageUrl(await fileRef2.getDownloadURL())
        // }
        // ---------------------------------------- //
        this.setFileUrl(await fileRef.getDownloadURL(),await fileRef2.getDownloadURL())
        // this block adds item to firebase storage backend through axios. once functional, it will replace the block above
        this.addToDatabase()
    // axios.post('api/fs
        //------------------------------------------- //
        
        // axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01}).then(res => {
        //     this.setState({ ...this.state,newItem:res.data})
        // })
    }

    removeFileFromSpace = async (url,id) => {
        // create reference
        // var storage = db.storage();
        // var storageRef = storage.ref();

        // delete from firebase
        if(url != null){
            const storageRef = app.storage().refFromURL(url)
            storageRef.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error')
            })
        }
        // delete from heroku db
        axios.delete(`/api/project/delete/${id}`)


        // const fileRef = storageRef.child(url)
        // delete file

        // fileRef.delete(url).then(() => {
        //     console.log('file has been deleted')
        // }).catch((error) => {
        //     console.log(error)
        // })

    }

    // removeFileFromSpace2 = async (url) => {
    //     const photoRef = app.storage.getReferenceFromUrl(url);

    // }

    // sendImageIntoSpace = async (file) => {

        // ----not used in original----
        // const { id } = this.props.username.user
        // const name = 'username'
        // const description = 'stuff'
        // const firebase_url = 'firebase_url'
        // const firebase_url01 = this.state.fileUrl
        // const file = e.target.files[0];
        // const storageRef = app.storage().ref()
        // const fileRef = storageRef.child(file.name)
            // console.log("send to space function")
        // fileRef.put(file).then(() => {
            // console.log('uploaded file')
        // })
        // this.setFileUrl(await fileRef.getDownloadURL())
        // console.log('this state fileUrl',this.state.fileUrl)
        // console.log(fileRef)
        
        // axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url}).then(res => {
        //     this.setState({ ...this.state,newItem:res.data})
        // })
    // }

    addToDatabase = () => {
        console.log('this is from addToDatabase function')
        const { fileUrl, imageUrl } = this.state
        const { id } = this.props.username.user
        const name = 'username'
        const description = 'stuff'
        const firebase_url = fileUrl
        const firebase_url01 = imageUrl
        if (imageUrl != null && fileUrl != null) {
            axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01})
            this.setState({fileUrl:null,file:null})
        }

    }

    handleChange(params){
        this.setState({ file:params })
    }

    // deleteModel = (params) => {
    //     console.log('this is params from delete model',params)
    //     axios.delete(`/api/project/delete/${params}`)
    // }

    render(){

        console.log('this is db',db)

        const { items } = this.state

        const mappedItems = items.map(element => {
            return <ModelItem key={element.model_id} name={element.name} img={element.firebase_url01} id={element.model_id} delete={this.deleteModel} removeFileFromSpace={this.removeFileFromSpace} />
        })

        return(
            <div className="collections">
                <section className="input">
                    <div className="collections-h2"><h2 >Collections</h2></div>
                    <AddProject fileHandler={this.fileHandler} fileHandlerRemove={this.fileHandlerRemove} handlePhoto={this.handlePhoto} handleFile={this.handleFile} />
                    {/* ----- moving this section to seperate functional componant */}
                    {/* <p>add photo</p>
                    <input 
                    type="file"
                    
                    accept="image/png,image/jpeg"
                    onChange={e => this.handlePhoto(e)} 
                    />
                    <p>add file</p>
                    <input
                    type="file"
                    accept=".stl,.blend"
                    onChange={e => this.handleFile(e)} 
                    />
                    
                    <button onClick={this.fileHandler}>submit</button>
                    <button onClick={this.fileHandlerRemove}>remove file</button> */}
                    {/* ---------------------------------------------- */}

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