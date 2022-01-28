import React, { Component } from 'react'
// import Resizer from 'react-image-file-resizer'
// import '../../UserPage.css'
import '../UserPage/UserPage.css'
import axios from 'axios'
// import UserProject from './UserProject'
// import {app} from '../../base'
// import ModelItems from './ModelItems'
// import { connect } from 'react-redux'
// import { getProjects } from '../../ducks/projectsReducer'
// import AddProject from './AddProject'
// import EditModel from '../FeaturedProjects/EditProject/EditModel'
import UserProject from '../FeaturedProjects/Project'
// import CreateProject from './CreateProject'

// const db = app.firestore()

// class UserCollections extends Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             openEditModel:false,
//             data:[],
//             fileUrl:null,
//             file:null,
//             imageFile:null,
//             previewImageFile:null,
//             previewModelFile:null,
//             imageUrl:null,
//             newItem:{},
//             props:null,
//             openAddProject:false,
//             projectName:'',
//             projectDescription:''
//         }
//         this.setFileUrl = this.setFileUrl.bind(this)
//         this.handleFile = this.handleFile.bind(this)
//         this.addFile = this.addFile.bind(this)
//         this.addPhoto = this.addPhoto.bind(this)
//         this.handlePhoto = this.handlePhoto.bind(this)
//         this.fileHandler = this.fileHandler.bind(this)
//         this.addToDatabase = this.addToDatabase.bind(this)
//         this.fileHandlerRemove = this.fileHandlerRemove.bind(this)
//         this.removeFileFromSpace = this.removeFileFromSpace.bind(this)
//         this.addNewProject = this.addNewProject.bind(this)
//         this.getImUrl = this.getImUrl.bind(this)
//         this.getFileUrl = this.getFileUrl.bind(this)
//         this.handleAddText = this.handleAddText.bind(this)
//         this.projectIsLiked = this.projectIsLiked.bind(this)
//         this.getProjects = this.getProjects.bind(this)
//     }

//     componentDidMount(){

//     }

    // getProjects = () => {
    //     const { user_id } = this.props.user
    //     axios.get(`/api/projects/${user_id}`).then(res =>
    //         this.setState({ ...this.state,data:res.data})) 
    // }

    // handleAddText(prop, val) {
    //     this.setState({
    //       [prop]: val
    //     })
    //   }

    // saves file url to state pending "add to SQL"
    // setFileUrl = async (params) => {
    //     this.setState({ fileUrl:params})
    // }

    // saves image url to state pending "add to SQL"
    // setImageUrl = async (params) => {
    //     this.setState({imageUrl:params})
    // }

    // adds actual model file to state pending firebase upload
    // addFile(params){
    //     this.setState({
    //         file:params,
    //         previewModelFile:URL.createObjectURL(params)
    //     })
    // }

    // adds actual image file to state pending firebase upload. creates preview image
    // addPhoto(params){
    //     this.setState({
    //         imageFile:params,
    //         previewImageFile:URL.createObjectURL(params)
    //     })
    // }

    // async load model file to state callback
    // handleFile = async (e) => {
    //     const file = e.target.files[0];
    //     this.addFile(await file)
    // }

    // async load image to state callback
    // handlePhoto = async (e) => {
    //     const photo = e.target.files[0]
    //     this.addPhoto(await photo)
    // }

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

    // fileHandler = async (params) => {
    //     const { file, fileUrl, imageFile, imageUrl } = this.state
    //     const image = true
    //     this.sendIntoSpace()
    // }

    // fileHandlerRemove = (params) => {
    //     this.setState({file:null})
    // }

    // handleDelete = (params) => {
    //     this.setState({imageFile:null})
    // }

    // this loads the model file and image file to firebase, then adds the info to SQL table
    // sendIntoSpace = async () => {
    //     const { file, imageFile, fileUrl, imageUrl, projectDescription, projectName } = this.state
    //     const { id } = this.props.username.user
    //     const name = projectName
    //     const description = projectDescription
    //     const firebase_url = 'firebase_url'
    //     const firebase_url01 = this.state.fileUrl
    //     this.props.setIsLoading()
    //     const theFile = await this.getFileUrl(file)
    //     this.setFileUrl(await theFile.getDownloadURL())
    //     const theImage = await this.getImUrl(imageFile)
    //     this.setImageUrl(await theImage.getDownloadURL())
    //     await this.addToDatabase(this.state.fileUrl,this.state.imageUrl)
    //     await this.getProjects()
    //     this.props.setIsLoading()
    //     this.props.openCreate()
    // }
    // getImUrl = async (input) => {
    //     const { user } = this.props.user.user
    //     const storageRef = app.storage().ref(`${user}/`)
    //     const fileRef = storageRef.child(input.name)
    //     await fileRef.put(input)
    //     console.log('image loaded')
    //     return (fileRef)
    // }
    // getFileUrl = async (input) => {
    //     const { user } = this.props.user.user
    //     const storageRef = app.storage().ref(`${user}/`)
    //     const fileRef = storageRef.child(input.name)
    //     await fileRef.put(input)
    //     console.log('file loaded')
    //     return (fileRef)
    // }
    // removeFileFromSpace = async (url,id,file) => {
    //     this.props.setIsLoading()
    //     if(url != null){
    //         const storageRef = await app.storage().refFromURL(url) // delete image
    //         await storageRef.delete().then(function deleted(params) {
    //             console.log('image deleted')
    //         }).catch(function (error) {
    //             console.log('there was an error',error)
    //         })
    //     }
    //     if(file != null){
    //         const storageRef2 = await app.storage().refFromURL(file) // delete file
    //         await storageRef2.delete().then(function deleted(params) {
    //             console.log('image deleted')
    //         }).catch(function (error) {
    //             console.log('there was an error',error)
    //         })
    //     }
    //     await axios.delete(`/api/project/delete/${id}`)
    //     this.props.setIsLoading()
    // }

    // adds file to SQL table
    // addToDatabase =  async (fileUrl,imageUrl) => {
    //     console.log('this is from addToDatabase function')
    //     const { projectDescription, projectName } = this.state
    //     const { id } = this.props.username.user
    //     const name = projectName
    //     const description = projectDescription
    //     const firebase_url = fileUrl
    //     const firebase_url01 = imageUrl
    //     await axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01}).then(res => {
    //         return res.status
    //     })
    //     await this.props.getProjects()
    // }

    // handleChange(params){
    //     this.setState({ file:params })
    // }

    // opens "add project" window
    // addNewProject(params){
    //     this.setState({
    //         openAddProject:!this.state.openAddProject
    //     })
    // }

//     projectIsLiked(projectId,userLike) {
//         try {
//             return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
//           } catch (error) {
//             console.log('user does not like this project',error);
//           }
//     }

//     render(){

//         const { openAddProject,openEditModel,previewImageFile,previewModelFile,data,file } = this.state
//         const { photo_url,user,showCreateProject,items } = this.props

//         const mappedProjects = items.map(element => {
//             return <UserProject key={element.model_id} data={element} projectIsLiked={this.projectIsLiked} />
//         })

//         return(
//             <div className="collections">

//                 {mappedProjects}
  
//             </div>
//         )
//     }
// }

// function mapStateToProps(reduxState){
//     return reduxState
// }

// export default UserCollections
