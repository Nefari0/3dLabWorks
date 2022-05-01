import React, { Component } from 'react'
import Resizer from 'react-image-file-resizer'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
// import ModelItems from './ModelItems'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer'
import { addNewModel } from '../../ducks/firebaseReducer'
import AddProject from './AddProject'
import EditModel from '../FeaturedProjects/EditProject/EditModel'
import Project from '../FeaturedProjects/Project'
import CreateProject from './CreateProject'

// const db = app.firestore()

class Collections extends Component {

    constructor(){
        super();

        this.state = {
            openEditModel:false,
            data:[],
            fileUrl:null,
            file:null,
            previewImageFile:null,
            previewModelFile:null,
            imageFile:null,
            // imageFileDefault:'https://firebasestorage.googleapis.com/v0/b/depot-7bb3e.appspot.com/o/madmodels%2Ffiles%2F12%2Fdeault%20cube.png?alt=media&token=3e81c85c-c3c3-4d50-9542-57fed9cb85db',
            imageUrl:null,
            newItem:{},
            props:null,
            openAddProject:false,
            projectName:'',
            projectDescription:''
        }
        this.setFileUrl = this.setFileUrl.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.addFile = this.addFile.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.handlePhoto = this.handlePhoto.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.addToDatabase = this.addToDatabase.bind(this)
        this.fileHandlerRemove = this.fileHandlerRemove.bind(this)
        this.removeFileFromSpace = this.removeFileFromSpace.bind(this)
        this.addNewProject = this.addNewProject.bind(this)
        this.getImUrl = this.getImUrl.bind(this)
        this.getFileUrl = this.getFileUrl.bind(this)
        this.handleAddText = this.handleAddText.bind(this)
        this.projectIsLiked = this.projectIsLiked.bind(this)
        this.getProjects = this.getProjects.bind(this)
        this.createNewProject = this.createNewProject.bind(this)
    }

    componentDidMount(){
        this.getProjects()
    }

    getProjects = () => {
        const { id } = this.props.user.user
        // alert('hit get projects function')
        axios.get(`/api/projects/${id}`).then(res =>
            this.setState({ ...this.state,data:res.data})) 
    }

    handleAddText(prop, val) {
        this.setState({
          [prop]: val
        })
      }

    //   --- Rebuilding add new projects function to reduce code --- //
    createNewProject = async () => {
        // all data needed
        const { file, imageFile, fileUrl, imageUrl, projectDescription, projectName } = this.state
        const user_id = this.props.user.user.id
        const { name } = this.state.file
        if(name != undefined) {
            this.props.setIsLoading()
    
            // -- add file -- //
            const cloudFile = await this.props.addNewModel(file,`madmodels/projects/${user_id}/${projectName}/`)
            const fileUrl = await cloudFile.action.payload.ref.getDownloadURL()
            // -- add photo if not null-- //
            var photoUrl = null
            if(imageFile != null){
                const cloudPhoto = await this.props.addNewModel(imageFile,`madmodels/projects/${user_id}/${projectName}/`)
                photoUrl = await cloudPhoto.action.payload.ref.getDownloadURL()
            }
            // -- send to DB -- //
            await this.addToDatabase(fileUrl,photoUrl)
            await this.getProjects()
            // -- reset / rerender view -- //
            this.props.resetView()
            this.props.setIsLoading()
        }
    } 
    // ------------------------------------------------------------- //

    // saves file url to state pending "add to SQL"
    setFileUrl = async (params) => {
        this.setState({ fileUrl:params})
    }

    // saves image url to state pending "add to SQL"
    setImageUrl = async (params) => {
        this.setState({imageUrl:params})
    }

    // adds actual model file to state pending firebase upload
    addFile(params){
        this.setState({
            file:params,
            previewModelFile:URL.createObjectURL(params)
        })
    }

    // adds actual image file to state pending firebase upload. creates preview image
    addPhoto(params){
        this.setState({
            imageFile:params,
            previewImageFile:URL.createObjectURL(params)
        })
    }

    // async load model file to state callback
    handleFile = async (e) => {
        const file = e.target.files[0];
        this.addFile(await file)
    }

    // async load image to state callback
    handlePhoto = async (e) => {
        const photo = e.target.files[0]
        this.addPhoto(await photo)
    }

    // handlePhoto = async (e) => {
    //     // const photo = e.target.files[0]
    //     var fileInput = false;

    //     if (e.target.files[0]) {
    //         fileInput = true
    //     }

    //     if (fileInput) {
    //         try {
    //             Resizer.imageFileResizer(
    //                 e.target.files[0],
    //                 300,
    //                 300,
    //                 "JPEG",
    //                 50,
    //                 0,
    //                 (uri) => {
    //                     this.setState({imageFile:URL.createObjectURL(uri)})
    //                 },
    //                 "file",
    //             );
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

    // }
    // ------------------------- //

    fileHandler = async (params) => {
        const { file, fileUrl, imageFile, imageUrl } = this.state
        const image = true
        this.sendIntoSpace()
    }

    fileHandlerRemove = (params) => {
        this.setState({file:null})
    }

    handleDelete = (params) => {
        this.setState({imageFile:null})
    }

    // this loads the model file and image file to firebase, then adds the info to SQL table
    sendIntoSpace = async () => {
        const { file, imageFile, fileUrl, imageUrl, projectDescription, projectName } = this.state
        const { id } = this.props.username.user
        const name = projectName
        const description = projectDescription
        const firebase_url = 'firebase_url'
        const firebase_url01 = this.state.fileUrl
        this.props.setIsLoading()
        const theFile = await this.getFileUrl(file)
        this.setFileUrl(await theFile.getDownloadURL())
        
        // -- add image if not null -- //
        if(imageFile != null){
            const theImage = await this.getImUrl(imageFile)
            this.setImageUrl(await theImage.getDownloadURL())
        }

        await this.addToDatabase(this.state.fileUrl,this.state.imageUrl)
        await this.getProjects()
        this.props.setIsLoading()
        // this.props.openCreate()
        // this.props.hideView('showCreateProject')
        this.props.resetView()
    }
    // adds image to firebase
    getImUrl = async (input) => {
        const { id } = this.props.user.user
        const storageRef = app.storage().ref(`madmodels/projects/${id}/`)
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('image loaded')
        return (fileRef)
    }
    // adds model file to firebase
    getFileUrl = async (input) => {
        const { id } = this.props.user.user
        const storageRef = app.storage().ref(`madmodels/projects/${id}/`)
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('file loaded')
        return (fileRef)
    }

    // deletes file from firebase
    removeFileFromSpace = async (url,id,file) => {
        this.props.setIsLoading()
        if(url != null){
            const storageRef = await app.storage().refFromURL(url) // delete image
            await storageRef.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error',error)
            })
        }
        if(file != null){
            const storageRef2 = await app.storage().refFromURL(file) // delete file
            await storageRef2.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error',error)
            })
        }
        // delete from DB
        await axios.delete(`/api/project/delete/${id}`)
        this.props.setIsLoading()
    }

    // adds file to SQL table
    addToDatabase =  async (fileUrl,imageUrl) => {
        console.log('this is from addToDatabase function')
        const { projectDescription, projectName } = this.state
        const id = this.props.user.user.id
        const name = projectName
        const description = projectDescription
        const firebase_url = fileUrl
        const firebase_url01 = imageUrl
        const is_hidden = false
        await axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01,is_hidden}).then(res => {
            return res.status
        })
        await this.props.getProjects()
    }

    handleChange(params){
        this.setState({ file:params })
    }

    // opens "add project" window
    addNewProject(params){
        this.setState({
            openAddProject:!this.state.openAddProject
        })
    }

    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            console.log('user does not like this project',error);
          }
    }

    render(){

        const { openAddProject,openEditModel,previewImageFile,previewModelFile,data,file } = this.state
        const { photo_url,user,showCreateProject } = this.props

        const mappedProjects = data.map(element => {
            return <Project key={element.model_id} data={element} name={element.name} img={element.firebase_url01} file={element.firebase_url} id={element.model_id} delete={this.deleteModel} removeFileFromSpace={this.removeFileFromSpace} openEdidModel={this.openEditModel} projectIsLiked={this.projectIsLiked} user_photo_url={photo_url} current_user_name={user.user.user} />
        })

        return(
            <div className="collections">
                {/* <header ><p>My Designs</p></header> */}
                {showCreateProject ? <CreateProject resetView={this.props.resetView} handleFile={this.handleFile} handleAddText={this.handleAddText} handlePhoto={this.handlePhoto} previewImageFile={previewImageFile} previewModelFile={previewModelFile} file={file} sendIntoSpace={this.sendIntoSpace} createNewProject={this.createNewProject} /> : null}

                {mappedProjects}
  
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {getProjects,addNewModel})(Collections)
