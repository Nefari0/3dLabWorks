import axios from 'axios';
import React, { Component } from 'react'
import './EditModel.css'
import Loading from '../../Loading/Loading';
import ImagePreview from './ImagePreview';
import { addNewModel,deleteFile,getRefFromUrl } from '../../../ducks/firebaseReducer';
import { connect } from 'react-redux';
import Resizer from 'react-image-file-resizer'

const addImageEndpoint = '/api/project/photos/put'
const deleteProjectEndpoint = '/api/project/delete/'
const updateFileEndpoint = '/api/project/update/file'
const updateProjectTextEndpoint = '/api/project/edit/name'

class EditModel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:this.props.info.name,
            description:this.props.info.description,
            photo_url:null,
            file_url:null,
            isLoading:false,
            imageUr1:null,
            openDeleteConfirm:false,
            isLoading:false,
            previewImageFile:null,
            isDeleted:false,
            newImage:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.executeChange = this.executeChange.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.removeFileFromSpace = this.removeFileFromSpace.bind(this)
        this.confirmDelete = this.confirmDelete.bind(this)
        this.newModelToDB = this.newModelToDB.bind(this)
        this.replaceModelFile = this.replaceModelFile.bind(this)
    }

    componentDidUpdate() {
        // const { previewImageFile,hideButtons,file_url } = this.state
        // if(previewImageFile != null && hideButtons === false) {
        //     this.setState({hideButtons:!this.state.hideButtons})
        // } else this.setState({hideButtons:false})
        // else if (previewImageFile === null && hideButtons === true) {
        //     this.setState({hideButtons:!this.state.hideButtons})
        // }
    }

    //  ----- Permanently Delete Selected Project ---- //
    removeFileFromSpace = async () => {
        const { firebase_url,model_id } = this.props.info[0] 
        this.setIsLoading()
        // -- delete main file -- //
        if(firebase_url != null){
            await this.props.deleteFile(firebase_url)
        }
        // -- delete associated images -- //
        await this.deleteAllImages(true)
        // -- delete from DB -- //
        await axios.delete(`${deleteProjectEndpoint}${model_id}`)
        this.setIsLoading()
        this.props.setIsDeleted()
    }

    // -- Delete All Images Upon Project Deletion -- //
    deleteAllImages = (confirm) => {
        const { modelImages } = this.props
        var strings = [...modelImages]
        if (confirm === true){
            strings.map(el => {
                this.props.deleteFile(el.photo_url)
            })
        }
    }

    // -- Replace Existing Model File -- //
    replaceModelFile = async () => {
        const { photo_url,file_url } = this.state
        const { model_id,firebase_url } = this.props.info[0]
        const { user_id } = this.props
        this.setIsLoading()

        const refFromURL = await this.props.getRefFromUrl(firebase_url).payload // project url
        try {
            await this.props.deleteFile(firebase_url)
        } catch(err) {
            console.log('this file doesnt exist')
        } // delete current file
        const newModel = await this.props.addNewModel(file_url,refFromURL) // add new file
        const modelUrl = await newModel.action.payload.ref.getDownloadURL() // url to DB
        await this.newModelToDB(model_id,modelUrl)

        this.setIsLoading()
    }

    newModelToDB = (model_id,url) => {
        axios.post(updateFileEndpoint, {url,model_id})
    }

    fileHandler = async (e,preview,photo_url) => {
        const file = e.target.files[0]
        this.setState({
            [photo_url]:file,
            [preview]:URL.createObjectURL(file)
        })
    }

    handleInput(prop,val){
        // console.log('handle input',prop,val)
        this.setState({
            [prop]:val
        })
    }

    handlePhoto = async (e) => {
        // const photo = e.target.files[0]
        var fileInput = false;

        if (e.target.files[0]) {
            fileInput = true
        }

        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    400,
                    267,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        console.log(uri,'uri')
                        this.setState({
                            previewImageFile:URL.createObjectURL(uri),
                            photo_url:uri
                        })
                    },
                    "file",
                    298,
                    191
                );
            } catch (err) {
                console.log(err)
            }
        }

    }

    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    passNewPhotoToFB = async () => {
        const { photo_url  } = this.state
        this.addPhoto(photo_url)
        this.setState({previewImageFile:null})
        await this.props.getImages()
    }

    addPhoto =  async (url) => {
        const { model_id,info } = this.props
        const name = null
        this.setIsLoading() // -- init loading screen
        
        const refFromURL = await this.props.getRefFromUrl(info[0].firebase_url).payload // -- path of stored project -- //
         
        const cloud = await this.props.addNewModel(url,refFromURL) // -- add new photo -- //

        // -- fetch and store photo url -- //
        const photo_url = await cloud.action.payload.ref.getDownloadURL()
        await axios.post(addImageEndpoint,{model_id,name,photo_url})

        // -- render new images -- //
        await this.props.getImages()
        this.setState({previewImageFile:null})
        this.setIsLoading() // -- exit loading screen
    }

    executeChange = async () => {
        const { model_id } = this.props.info
        const { name, description } = this.state
        this.setIsLoading()
        await axios.post(updateProjectTextEndpoint, {name,description,model_id})
        this.setIsLoading()
        this.props.getDetails()
    }

    confirmDelete = () => {
        this.setState({openDeleteConfirm:!this.state.openDeleteConfirm})
    }

    render() {
        const { previewImageFile,isLoading,openDeleteConfirm,photo_url,description,name,file_url,hideButtons } = this.state
        return(            
            <div className="edit-project-container" >
                
                {isLoading ? <Loading/> : null}

                    {/* ---- Delete Project ---- */}
                    <button
                        style={{width:'30px',height:'20px',fontSize:'10px',marginLeft:'85%',marginTop:'10px'}}
                        onClick={() => this.confirmDelete()}
                        >delete
                    </button>

                    {!openDeleteConfirm ? null :
                    <div  className='select-delete'>
                        <p onClick={() => this.removeFileFromSpace()} >yes</p>
                        <p onClick={() => this.confirmDelete()}>no</p>
                    </div>}
                    {/* ------------------------- */}
                
                <div className='section-title'><p style={{color:'#555'}}>Add Image / Update File</p></div>

                {previewImageFile ? <ImagePreview previewImageFile={previewImageFile} photo_url={photo_url} addPhoto={this.addPhoto} handleInput={this.handleInput} /> : null}

                 {file_url ?
                <section className={`replace-file-warning`}>
                        <h4>replace file?</h4>
                        <span  className='select-delete' style={{height:'50px',backgroundColor:'#5077be'}} >
                            <p className='delete-button-txt' onClick={() => this.replaceModelFile()} >yes</p>
                            <p className='delete-button-txt'
                            onClick={() => this.handleInput('file_url',null)}
                            >no</p>
                        </span>
                </section>
                 : null}

                <section className='edit-project-row row-x' style={{height:'30px',color:'#555'}} >

                    {previewImageFile === null && file_url ===null  ? <div className='edit-file-input-box '>
                        <div className='edit-file-button ' ><p>Add Image</p></div>
                        <input className='fake-input-file '
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        // onChange={e => this.fileHandler(e,'previewImageFile','photo_url')} 
                        onChange={e => this.handlePhoto(e)} 
                        />
                    </div> : null}

                    {previewImageFile === null && file_url ===null ? <div className='edit-photo-input-box' >
                        <div className='edit-file-button' ><p>New File</p></div>
                        <input className='fake-input-file'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept=".blend,.stl"
                        onChange={e => this.fileHandler(e,null,'file_url')} 
                        />
                    </div> : null}

                </section>

                <section className='edit-project-row text-input-row'>

                    <div className='input-left-column'>

                        <div className='section-title'><p style={{color:'#555'}}>Name</p></div>
                        <input value={name} className="text-input" onChange={e => this.handleInput('name',e.target.value)} ></input>
                        <div className='section-title'><p style={{color:'#555'}}>Description</p></div>
                        <textarea name="text" rows="5" cols="50" wrap="soft" placeholder='text' value={description} className="text-input input-description" onChange={e => this.handleInput('description',e.target.value)} > </textarea>

                    </div>

                </section> 
                <div className='section-title'><p style={{color:'#555'}}>Submit Changes / Delete</p></div>
                    {previewImageFile === null && file_url ===null ? <div className='edit-file-button' style={{position:'relative',marginTop:'10px',height:'30px',width:'80px'}} onClick={() => this.executeChange()} ><p>Submit</p></div> : null}

            </div>
        )
    }
}

// export default EditModel

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps, {addNewModel,deleteFile,getRefFromUrl} )(EditModel)