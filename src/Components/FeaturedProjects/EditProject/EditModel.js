import axios from 'axios';
import React, { Component } from 'react'
import './EditModel.css'
import Loading from '../../Loading/Loading';
import Notice from '../../Notice/Notice'
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
            // phototOne:null,
            // phototOne2:null,
            // phototOne3:null,
            // phototOn4:null,
            previewImageFile:null,
            previewImageFile2:null,
            previewImageFile3:null,
            previewImageFile4:null,
        }
        // this.addToState = this.addToState.bind(this)
        this.handleText = this.handleText.bind(this)
        this.executeChange = this.executeChange.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.setImageUrl = this.setImageUrl.bind(this)
        this.getImUrl = this.getImUrl.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.imageToDb = this.imageToDb.bind(this)
        this.passNewPhotoToFB = this.passNewPhotoToFB.bind(this)
        // const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = props.info[0]
    }


    async componentDidUpdate(){
        // if (prevProps !== this.props) {
        //     this.setState({ information: {} })
        //   }
        // const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = await this.props.info
    //     if (this.state.information === undefined){
        // this.addToState(description,name)
    //     }
    }

    // addToState(name1,name2) {
    //             const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.props.info
    //     this.setState({
    //         stateName:name2,
    //         stateDescription:name1

    //         // ...this.state,
    //         // information:this.props.info
    //     })
    // }


    setIsLoading = () => {
        this.setState({
            isLoading:!this.state.isLoading
        })
    }

    fileHandler = async (e,preview,photo_url) => {
        const file = e.target.files[0]
        // alert('hit file handle')
        this.setState({
            [photo_url]:file,
            [preview]:URL.createObjectURL(file)
            // previewImageFile:URL.createObjectURL(file)
        })
    }

    handleText(prop,val){
        
        const file = val.target.files[0]
        this.setState({
            [prop]:val
            // information:[prop][val]
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
                // console.log('url',el)
                this.addPhoto(el)
            }
        })
    }

    uploadNewFile = () => {
        alert('this action will permanently remove current file. continue?')
    }

    addPhoto =  async (photo_url) => {
        // convert the two following lines to arrays.
        // pass each element to firebase
        // pass each element to DB

        this.setIsLoading()
        // console.log('url',photo_url)
        const thePhoto = await this.getImUrl(photo_url)
        this.setImageUrl(await thePhoto.getDownloadURL())
        this.imageToDb(this.state.imageUrl)
        console.log('file uploaded')
        this.setIsLoading()
    }
    getImUrl = async (input) => {
        // const { user } = this.props.user.user
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
        // console.log('set image function')
        this.setState({imageUrl:params})
        // this.addToDatabase()
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

    render() {
        
        // const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.state.information
        const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.props.info
        const { previewImageFile,previewImageFile2,previewImageFile3,previewImageFile4,isLoading } = this.state
        // const prevArray = [previewImageFile,previewImageFile2,previewImageFile3,previewImageFile4]
        return(
            <div className="edit-project-container" >
                {isLoading ? <Loading/> : null}
                {/* adding photos */}
                <section className='project-selection-title'><h3 className="prodect-selection-h3">Edit Project</h3></section>

                {/* --- adding a file ----- */}
                <section className='edit-project-row row-x' style={{height:'30px',color:'#555'}} >
                    <div className='file-input-box'>
                    {/* <div style={{height:'90px',marginTop:'auto',marginBottom:'auto'}}> */}
                        {/* <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'20px',marginBottom:'10px'}} src={previewImageFile} /> */}
                        <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e)} 
                        />
                    </div>
                {/* <button onClick={() => this.passNewPhotoToFB()}>click to add</button> */}
                <div className='add-button file-button' onClick={() => this.uploadNewFile()}>add</div>
                </section>
                {/* ---------------------- */}

                {/* --- adding additional photos ----- */}
                {/* <section className='column'>
                    <div className='edit-project-row row-x'> */}
                <section className='edit-project-row pic'>
                    <div className='row-x'>
                    <div className='photo-input-box'>
                        <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'60px',marginBottom:'10px'}} src={previewImageFile} />
                        <input className='input select-photo-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        // onChange={e => this.fileHandler(e)} 
                        onChange={e => this.fileHandler(e,'previewImageFile','photo_url')} 
                        />
                    </div>
                    <div className='photo-input-box'>
                        <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'60px',marginBottom:'10px'}} src={previewImageFile2} />
                        <input className='input select-photo-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e,'previewImageFile2','photo_url2')} 
                        />
                    </div>
                    <div className='photo-input-box'>
                        <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'60px',marginBottom:'10px'}} src={previewImageFile3} />
                        <input className='input select-photo-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e,'previewImageFile3','photo_url3')} 
                        />
                        {/* <p style={{position:'reletive',color:'#555'}}>text</p> */}
                        {/* <p className='select-photo-text'>text</p> */}
                    </div>
                    <div className='photo-input-box'>
                        <img style={{width:'50px',height:'50px',borderRadius:'10px',marginLeft:'60px',marginBottom:'10px'}} src={previewImageFile4} />
                        <input className='input select-photo-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e,'previewImageFile4','photo_url4')} 
                        />
                        {/* <p className='select-photo-text'>text</p> */}
                    </div>
                    </div>
                    <div className='add-button pic-button' onClick={() => this.passNewPhotoToFB()}>add</div>
                </section>
                {/* ---------------------- */}

                <input placeholder="project name" className="text-input"></input>
                <section className='edit-project-row input-row'>
                    {/* <input placeholder={`${'name'}`} className="text-input" onChange={e => this.handleText('name',e.target.value)}></input> */}

                    {/* <input placeholder={`${'description'}`} className="text-input input-description" onChange={e => this.handleText('description',e.target.value)}></input> */}
                    <textarea name="text" rows="5" cols="50" wrap="soft" className="text-input input-description" onChange={e => this.handleText('text',e.target.value)} placeholder='text' > </textarea>


                </section>
                <button onClick={this.executeChange}>execute</button>


                {/* <input placeholder="project description" className="text-input"></input> */}
                {/* <p>select photo</p> */}
                {/* <input  type="file" accept=".jpg/.png" ></input> */}
                {/* <p>add .blend or .stl file</p> */}
                {/* <input  type="file" accept=".blend/.stl" ></input> */}
            
            </div>
        )
    }
}

export default EditModel