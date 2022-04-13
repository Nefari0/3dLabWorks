import axios from 'axios';
import React, { Component } from 'react'
import './EditModel.css'
import Loading from '../../Loading/Loading';
import UserPage from '../../UserPage/UserPage';
// import Notice from '../../Notice/Notice'
import ImagePreview from './ImagePreview';
import { Route } from 'react-router-dom';
import {app} from '../../../base'
const db = app.firestore()

class EditModel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:this.props.info[0].name,
            description:this.props.info[0].description,
            photo_url:null,
            photo_url2:null,
            photo_url3:null,
            photo_ur4:null,
            isLoading:false,
            imageUr1:null,
            openDeleteConfirm:false,
            isLoading:false,

            previewImageFile:null,
            previewImageFile2:null,
            previewImageFile3:null,
            previewImageFile4:null,
            isDeleted:false,
        }
        this.handleText = this.handleText.bind(this)
        this.executeChange = this.executeChange.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.setImageUrl = this.setImageUrl.bind(this)
        this.getImUrl = this.getImUrl.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.imageToDb = this.imageToDb.bind(this)
        this.passNewPhotoToFB = this.passNewPhotoToFB.bind(this)
        this.removeFileFromSpace = this.removeFileFromSpace.bind(this)
        this.confirmDelete = this.confirmDelete.bind(this)
        this.newModelToDB = this.newModelToDB.bind(this)
        this.replaceModelFile = this.replaceModelFile.bind(this)
        this.getNewFileUrl = this.getNewFileUrl.bind(this)
        this.createNewModel = this.createNewModel.bind(this)
    }

    removeFileFromSpace = async () => {
        const { firebase_url,model_id,firebase_url01 } = this.props.info[0] 
        const { modelImages } = this.state
        console.log('remove',firebase_url)
        this.setIsLoading()
        if(firebase_url01 != null){
            // const storageRef = app.storage().refFromURL(url)
            const storageRef = await app.storage().refFromURL(firebase_url01) // delete image
            await storageRef.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error',error)
            })
        }
        if(firebase_url != null){
            // const storageRef = app.storage().refFromURL(url)
            const storageRef2 = await app.storage().refFromURL(firebase_url) // delete file
            await storageRef2.delete().then(function deleted(params) {
                console.log('image deleted')
            }).catch(function (error) {
                console.log('there was an error',error)
            })
        }
        // delete associated images
        // modelImages.forEach(el => {
        //     await this.deleteImages(url)
        // })
        // delete from DB
        console.log('got to db delete',model_id)
        await axios.delete(`/api/project/delete/${model_id}`)
        this.setIsLoading()
        this.props.setIsDeleted()
    }
    // delete images
    deleteImages = async (url) => {
        const storageRef = await app.storage().refFromURL(url)
        await storageRef.delete().then(function deleted(params) {
            console.log('images delete').catch(function (error) {
                console.log('there was an error',error)
            })
        })
        return
    }

    replaceModelFile = async () => {
        const { photo_url } = this.state
        const { model_id,firebase_url } = this.props.info[0]
        const { user_id } = this.props
        
        // remove current file
        const storageRef = await app.storage().refFromURL(firebase_url) // delete image
        await storageRef.delete().then(function deleted(params) {
            console.log('image deleted')
        }).catch(function (error) {
            console.log('there was an error',error)
        })
        // add new file
        this.setIsLoading()
        const newModel = await this.createNewModel(photo_url)
        // get url
        this.setImageUrl(await newModel.getDownloadURL())
        // url to DB
        await this.newModelToDB(model_id,this.state.imageUrl)
        this.setIsLoading()
    }

    createNewModel = async (input) => {
        const { user_id,user_name } = this.props
        const storageRef = app.storage().ref(`${user_name}/`)
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('image loaded')
        return (fileRef)
    }

    getNewFileUrl =  async (photo_url) => {
        this.setIsLoading()
        const thePhoto = await this.getImUrl(photo_url)
        this.setImageUrl(await thePhoto.getDownloadURL())
        console.log('file uploaded')
        this.setIsLoading()
    }
    newModelToDB = (model_id,url) => {
        axios.post('/api/project/update/file', {url,model_id})
    }

    fileHandler = async (e,preview,photo_url) => {
        const file = e.target.files[0]
        this.setState({
            [photo_url]:file,
            [preview]:URL.createObjectURL(file)
        })
    }

    handleText(prop,val){
        this.setState({
            [prop]:val
        })
    }

    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    passNewPhotoToFB = async () => {
        const { photo_url,photo_url2,photo_url3,photo_url4 } = this.state
        const prevArray = [photo_url,photo_url2,photo_url3,photo_url4]
        await prevArray.forEach(el => {
            if (el != undefined && el != null) {
                this.addPhoto(el)
            }
        })
        this.setState({previewImageFile:null})
        await this.props.getImages()
    }

    addPhoto =  async (photo_url) => {
        this.setIsLoading()
        const thePhoto = await this.getImUrl(photo_url)
        this.setImageUrl(await thePhoto.getDownloadURL())
        this.imageToDb(this.state.imageUrl)
        console.log('file uploaded')
        this.setIsLoading()
    }
    getImUrl = async (input) => {
        const { user_id } = this.props
        const { imageUrl } = this.state
        if (input === null) {return imageUrl}
        const storageRef = app.storage().ref(`madmodels/files/${user_id}/`)
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('image loaded')
        return (fileRef)
    }
    setImageUrl = (params) => {
        this.setState({imageUrl:params})
    }

    imageToDb = async () => {
        const { imageUrl } = this.state
        const { model_id } = this.props
        const name = 'random word'
        const photo_url = imageUrl
        await axios.post('/api/project/photos/put',{model_id,name,photo_url})
        await this.props.getImages()
    }

    executeChange(){
        const { model_id } = this.props.info[0]
        const { name, description } = this.state
        
        axios.post('/api/project/edit/name', {name,description,model_id})
        this.props.getDetails()
    }

    confirmDelete = () => {
        this.setState({openDeleteConfirm:!this.state.openDeleteConfirm})
    }

    render() {
        const { firebase_url,firebase_url01,firebase_url02,model_id,user_id} = this.props.info
        const { previewImageFile,previewImageFile2,previewImageFile3,previewImageFile4,isLoading,openDeleteConfirm,isDeleted,imageUr1,newModel,photo_url,description,name } = this.state
        return(            
            <div className="edit-project-container" >
                
                {isLoading ? <Loading/> : null}
                <section className='project-selection-title'><h3 className="prodect-selection-h3">{openDeleteConfirm ? "Delete this Project?" : "Edit Project"}</h3>{!openDeleteConfirm ? <p className="delete-project-button" onClick={() => this.confirmDelete()} >X</p>:<div onClick={() => this.confirmDelete()} className='select-delete'><p className='delete-button-txt' onClick={() => this.removeFileFromSpace()} >yes</p><p className='delete-button-txt'>no</p></div>}</section>
                {/* --- adding a file ----- */}
                <div className='section-title'><p style={{color:'#555'}}>Add Image / Update File</p></div>
                {previewImageFile ? <ImagePreview previewImageFile={previewImageFile} passNewPhotoToFB={this.passNewPhotoToFB} /> : null}
                {photo_url ? <div style={{height:'100px',width:'100px',backgroundColor:'red'}} onClick={() => this.replaceModelFile()} ><h4 style={{color:'#fff'}} >replace this file?</h4></div> : null}
                <section className='edit-project-row row-x' style={{height:'30px',color:'#555'}} >

                    <div className='edit-file-input-box '>
                        <div className='edit-file-button ' ><p>Image</p></div>

                        {/* <input className='input-file edit-select-file' */}
                        <input className='fake-input-file '
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e,'previewImageFile','photo_url')} 
                        />
                    </div>

                    <div className='edit-photo-input-box '>
                        <div className='edit-file-button' ><p>New File</p></div>
                        <input className='fake-input-file'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept=".blend,.stl"
                        onChange={e => this.fileHandler(e,null,'photo_url')} 
                        />
                    </div>

                </section>

                <section className='edit-project-row text-input-row'>
                    <div className='input-left-column'>
                <div className='section-title'><p style={{color:'#555'}}>Name</p></div>
                    <input value={name} className="text-input" onChange={e => this.handleText('name',e.target.value)} ></input>
                    {/* <div className='section-title'><p style={{color:'#555'}}>Update File</p></div> */}
                    <div className='section-title'><p style={{color:'#555'}}>Description</p></div>
                        <textarea name="text" rows="5" cols="50" wrap="soft" placeholder='text' value={description} className="text-input input-description" onChange={e => this.handleText('description',e.target.value)} > </textarea>
                        {/* <div className='add-button text-add'onClick={() => this.executeChange()}>Submit</div> */}
                    </div>
                    <div className='input-right-column'>
                        {/* <div className='add-button text-add' style={{marginTop:'30px'}} onClick={() => this.passNewPhotoToFB()}>Submit </div> */}
                    </div>

                </section> 
                <div className='section-title'><p style={{color:'#555'}}>Submit Changes</p></div>
                    <div className='edit-file-button' style={{position:'relative',marginTop:'10px',height:'30px',width:'80px'}} onClick={() => this.executeChange()} ><p>Submit</p></div>
            </div>
        )
    }
}

export default EditModel