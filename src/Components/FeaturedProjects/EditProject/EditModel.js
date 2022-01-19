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
            name:'',
            description:'',
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
    }


    async componentDidUpdate(){

    }

    // setIsLoading = () => {
    //     this.setState({
    //         isLoading:!this.state.isLoading
    //     })
    // }

    removeFileFromSpace = async () => {
        const { firebase_url,model_id,firebase_url01 } = this.props.info[0] 
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
        // delete from DB
        console.log('got to db delete',model_id)
        await axios.delete(`/api/project/delete/${model_id}`)
        this.setIsLoading()
        this.props.setIsDeleted()
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
    }

    uploadNewFile = () => {
        alert('this action will permanently remove current file. continue?')
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
        const storageRef = app.storage().ref(`photos/${user_id}/`)
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('image loaded')
        return (fileRef)
    }
    setImageUrl = (params) => {
        this.setState({imageUrl:params})
    }

    imageToDb = () => {
        const { imageUrl } = this.state
        const { model_id } = this.props
        const name = 'random word'
        const photo_url = imageUrl
        axios.post('/api/project/photos/put',{model_id,name,photo_url})
    }

    executeChange(){
        const { model_id } = this.props.info[0]
        const { name, description } = this.state
        
        axios.post('/api/project/edit/name', {name,model_id})
        this.props.getDetails()
    }

    confirmDelete = () => {
        this.setState({openDeleteConfirm:!this.state.openDeleteConfirm})
    }

    // setIsDeleted = () => {
    //     this.setState({isDeleted:!this.state.isDeleted})
    // }

    render() {
        const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.props.info
        const { previewImageFile,previewImageFile2,previewImageFile3,previewImageFile4,isLoading,openDeleteConfirm,isDeleted } = this.state
        return(            
            <div className="edit-project-container" >
                
                {isLoading ? <Loading/> : null}
                <section className='project-selection-title'><h3 className="prodect-selection-h3">{openDeleteConfirm ? "Delete this Project?" : "Edit Project"}</h3>{!openDeleteConfirm ? <p className="delete-project-button" onClick={() => this.confirmDelete()} >X</p>:<div onClick={() => this.confirmDelete()} className='select-delete'><p className='delete-button-txt' onClick={() => this.removeFileFromSpace()} >yes</p><p className='delete-button-txt'>no</p></div>}</section>
                {/* <Notice /> */}
                {/* --- adding a file ----- */}
                <div className='section-title'><p style={{color:'#555'}}>Add Image / Update File</p></div>
                {previewImageFile ? <ImagePreview previewImageFile={previewImageFile} passNewPhotoToFB={this.passNewPhotoToFB} /> : null}
                <section className='edit-project-row row-x' style={{height:'30px',color:'#555'}} >
                        {/* <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e)} 
                        />
                <div className='add-button file-button' onClick={() => this.uploadNewFile()}>Submit</div> */}

                    <div className='edit-file-input-box '>
                        {/* <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'10px',marginBottom:'0px'}} src={previewImageFile} /> */}
                        {/* <div className='add-file-button add-file-button-text' >{this.getFileName()}</div> */}
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
                        {/* <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'10px',marginBottom:'0px'}} src={previewImageFile} /> */}
                        {/* <div className='add-file-button add-file-button-text' >{this.getFileName()}</div> */}
                        <div className='edit-file-button' ><p>New File</p></div>

                        <input className='fake-input-file'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept=".blend,.stl"
                        // onChange={e => this.props.handleFile(e)} 
                        />
                    </div>

                </section>
                {/* ---------------------- */}

                {/* --- adding additional photos ----- */}
                {/* <section className='edit-project-row pic-title'>
                    <div className='section-title'><p style={{color:'#555'}}>Add Photo</p></div>
                    <div className='pic-add'>
                    <div className='photo-input-box '>
                        <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'10px',marginBottom:'0px'}} src={previewImageFile} />
                        <input className='input select-photo-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e,'previewImageFile','photo_url')} 
                        />
                    </div>

                    <div className='add-button file-button' style={{marginTop:'30px'}} onClick={() => this.passNewPhotoToFB()}>Submit</div>
                    </div>
                </section> */}
                {/* ---------------------- */}

                <section className='edit-project-row text-input-row'>
                    <div className='input-left-column'>
                <div className='section-title'><p style={{color:'#555'}}>Name</p></div>
                    <input placeholder="project name" className="text-input" onChange={e => this.handleText('name',e.target.value)} ></input>
                    {/* <div className='section-title'><p style={{color:'#555'}}>Update File</p></div> */}
                    <div className='section-title'><p style={{color:'#555'}}>Description</p></div>
                        <textarea name="text" rows="5" cols="50" wrap="soft" placeholder='text' className="text-input input-description" onChange={e => this.handleText('text',e.target.value)} > </textarea>
                        {/* <div className='add-button text-add'onClick={() => this.executeChange()}>Submit</div> */}
                    </div>
                    <div className='input-right-column'>
                        {/* <div className='add-button text-add' style={{marginTop:'30px'}} onClick={() => this.passNewPhotoToFB()}>Submit </div> */}
                    </div>

                </section> 
                <div className='section-title'><p style={{color:'#555'}}>Submit Changes</p></div>
                    <div className='edit-file-button' style={{position:'relative',marginTop:'10px',height:'30px',width:'80px'}} onClick={() => this.passNewPhotoToFB()} ><p>Submit</p></div>
            </div>
        )
    }
}

export default EditModel