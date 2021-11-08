import React, { Component } from 'react'
import Resizer from 'react-image-file-resizer'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
import ModelItem from './ModelItems'
import { projectManagement } from 'firebase-admin'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer'
import AddProject from './AddProject'
import EditModel from '../FeaturedProjects/EditProject/EditModel'

const db = app.firestore()

class Collections extends Component {

    constructor(){
        super();

        this.state = {
            openEditModel:false,
            items:[],
            fileUrl:null,
            file:null,
            imageFile:null,
            previewImageFile:null,
            imageUrl:null,
            newItem:{},
            props:null,
            openAddProject:false,
            projectName:'',
            projectDescription:''
        }
        // this.sendIntoSpace = this.sendIntoSpace.bind(this)
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
        this.addNewProject = this.addNewProject.bind(this)
        this.getImUrl = this.getImUrl.bind(this)
        this.getFileUrl = this.getFileUrl.bind(this)
        this.handleAddText = this.handleAddText.bind(this)
        this.editProject = this.editProject.bind(this)
        // this.resizeFile = this.resizeFile.bind(this)
        // this.removeFileFromSpace2 = this.removeFileFromSpace2.bind(this)
        // this.deleteModel = this.deleteModel.bind(this)
    }

    componentDidMount(){
        const { id } = this.props.user.user
        axios.get(`/api/projects/${id}`).then(res =>
            this.setState({ ...this.state,items:res.data})) 
        // this.props.getProjects()
            
    }

    editProject() {
        this.setState({
            openEditModel:!this.state.openEditModel
        })
    }

    handleAddText(prop, val) {
        this.setState({
          [prop]: val
        })
      }

    setFileUrl = async (params) => {
        // const { imageFile } = this.state
        // console.log("set file function")
        this.setState({ fileUrl:params})
        // return new Promise(console.log('has been added'))
        // this.addToDatabase()        
    }

    setImageUrl = async (params) => {
        // console.log('set image function')
        this.setState({imageUrl:params})
        // this.addToDatabase()
    }

    addFile(params){
        this.setState({file:params})
    }

    addPhoto(params){
        this.setState({
            imageFile:params,
            previewImageFile:URL.createObjectURL(params)
        })
    }

    handleFile = async (e) => {
        const file = e.target.files[0];
        this.addFile(await file)
    }

    // ---- resizing photo ---- //
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
        const { file, imageFile, fileUrl, imageUrl, projectDescription, projectName } = this.state
        const { id } = this.props.username.user
        const name = projectName
        const description = projectDescription
        const firebase_url = 'firebase_url'
        const firebase_url01 = this.state.fileUrl
        // const file = e.target.files[0];

        // this block needs to be moved to backend/controller. once backend is funtional, it will be deleted.

        // ---- this uploads file to firebase ---- //
        // if (file != null){
        // const storageRef = app.storage().ref()
        // const fileRef = storageRef.child(file.name)
        // fileRef.put(file).then(() => {
        //     console.log('uploaded file')
        // })
        // this.setFileUrl(await fileRef.getDownloadURL())
        // console.log('this is file fileRef',fileRef)
        // }
        // ------------------------------------------ //
        
        // ---- this uploads image to firebase ---- //
        // if (imageFile != null) {
            // const storageRef2 = app.storage().ref()
            // const fileRef2 = storageRef2.child(imageFile.name)
            // fileRef2.put(imageFile).then(() => {
            //     const theUrl = fileRef2.getDownloadURL()
            //     this.setFileUrl(theUrl)
            //     console.log('uploaded image file')
            // })
            // this.setImageUrl(await fileRef2.getDownloadURL())
        // }
        // ---------------------------------------- //
        this.props.setIsLoading()
        const theFile = await this.getFileUrl(file)
        this.setFileUrl(await theFile.getDownloadURL())
        const theImage = await this.getImUrl(imageFile)
        // await axios.post('api/asset/upload/add',{ imageFile }) // tranfering to backend
        this.setImageUrl(await theImage.getDownloadURL())
        this.addToDatabase(this.state.fileUrl,this.state.imageUrl)
        this.props.setIsLoading()
        // if (imageUrl != null && fileUrl != null) {
        //     this.addToDatabase()
        //     console.log('added to db')
        // }
        // const theImage = await this.getImUrl(imageFile)
        // return console.log('image', theImage)
        // console.log('filefilfile',theFile)
        // const theImage = await this.getImUrl(fileRef2)
        // return console.log('imageimageimage',theImage)
        
        // await this.setFileUrl(await fileRef.getDownloadURL())
        
        // await this.setImageUrl(await fileRef2.getDownloadURL())
        
        // this block adds item to firebase storage backend through axios. once functional, it will replace the block above
        // this.addToDatabase()
    // axios.post('api/fs
        //------------------------------------------- //
        
        // axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01}).then(res => {
        //     this.setState({ ...this.state,newItem:res.data})
        // })
    }
    getImUrl = async (input) => {
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('image loaded')
        return (fileRef)
    }
    getFileUrl = async (input) => {
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('file loaded')
        // const url = await snapshot.storageRef.getDownloadURL()
        return (fileRef)
    }

    // ----- resize image file uploads ----- //
    // resizeFile = (file) =>
    //     new Promise((resolve) => {
    //         Resizer.imageFileResizer(
    //         file,
    //         300,
    //         300,
    //         "PNG",
    //         100,
    //         0,
    //         (uri) => {
    //             resolve(uri);
    //         },
    //         "base64"
    //         );
    //     });

    
    // -------------------------------------- //

    removeFileFromSpace = async (url,id,file) => {
        // create reference
        // var storage = db.storage();
        // var storageRef = storage.ref();

        // delete from firebase
        this.props.setIsLoading()
        if(url != null){
            // const storageRef = app.storage().refFromURL(url)
            const storageRef = await app.storage().refFromURL(url) // delete image
            await storageRef.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error',error)
            })
        }
        if(file != null){
            // const storageRef = app.storage().refFromURL(url)
            const storageRef2 = await app.storage().refFromURL(file) // delete image
            await storageRef2.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error',error)
            })
        }
        // delete from heroku db
        await axios.delete(`/api/project/delete/${id}`)
        this.props.setIsLoading()


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

    addToDatabase = (fileUrl,imageUrl) => {
        console.log('this is from addToDatabase function')
        const { projectDescription, projectName } = this.state
        const { id } = this.props.username.user
        const name = projectName
        const description = projectDescription
        const firebase_url = fileUrl
        const firebase_url01 = imageUrl
        axios.post('/api/project/post', {id,name,description,firebase_url,firebase_url01}).then(res => {
            return res.status
        })
    }

    handleChange(params){
        this.setState({ file:params })
    }

    addNewProject(params){
        this.setState({
            openAddProject:!this.state.openAddProject
        })
    }

    // deleteModel = (params) => {
    //     console.log('this is params from delete model',params)
    //     axios.delete(`/api/project/delete/${params}`)
    // }

    render(){

        const { items,openAddProject,openEditModel,previewImageFile } = this.state

        const mappedItems = items.map(element => {
            return <ModelItem key={element.model_id} name={element.name} img={element.firebase_url01} file={element.firebase_url} id={element.model_id} delete={this.deleteModel} removeFileFromSpace={this.removeFileFromSpace} openEdidModel={this.openEditModel} />
        })

        return(
            <div className="collections">
                
                <section className="input">


                    <div className="collections-h2"><h2 >Collections</h2></div>
                    <div onClick={this.addNewProject}><p>add project?</p></div>

                    {!openAddProject ? null : <AddProject previewImageFile={previewImageFile} fileHandler={this.fileHandler} fileHandlerRemove={this.fileHandlerRemove} handlePhoto={this.handlePhoto} handleFile={this.handleFile} addNewProject={this.addNewProject} handleAddText={this.handleAddText} />}
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
                    {!openEditModel ? mappedItems : <EditModel/>}
                    {/* {mappedItems} */}
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