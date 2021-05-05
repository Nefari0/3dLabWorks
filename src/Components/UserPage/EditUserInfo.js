import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer'
// import { store } from 'react-redux'
import './EditUserInfo.css'
import {app} from '../../base'
import axios from 'axios'

const db = app.firestore()

class EditUserInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_name:'',
            email:'',
            first_name:'',
            photoUrl:null,
            staticPhoto:null,
            file:null,
            user:{}

        }
        this.handlePhotoChange = this.handlePhotoChange.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.cancelAddPhoto = this.cancelAddPhoto.bind(this)
        this.handleCancelClick = this.handleCancelClick.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.launchPic = this.launchPic.bind(this)
        this.setFileUrl = this.setFileUrl.bind(this)
        this.handleLaunchPic = this.handleLaunchPic.bind(this)
        this.addToDatabase = this.addToDatabase.bind(this)

        // temp functions for testing//
        this.handleInfoClick = this.handleInfoClick.bind(this)
        this.giveMeInfo = this.giveMeInfo.bind(this)
    }

    componentDidMount(){
        const { user } = this.props.user
        this.setState({user:user})
    }

    launchPic = async (file) => {
        // const { staticPhoto } = this.state
        const { photo_url } = this.state.user
        const { id } = this.props.user.user
        // if(photo_url != null){
        //     this.deleteFromFirebase(photo_url)
        // }
        const photoName = `profile pic ${id}`
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(photoName + file.name)
        fileRef.put(file).then(() => {
            console.log('photo uploaded',file)
        })
        this.setFileUrl(await fileRef.getDownloadURL())
        console.log('this is fileRef', fileRef)
    }

    deleteFromFirebase(url){
        const storageRef = app.storage().refFromURL(url)
        storageRef.delete().then(function deleted(params) {
            console.log('image deleted')
        }).catch(function (error) {
            console.log('there was an error')
        })
    }

    handleLaunchPic(){
        const { staticPhoto } = this.state
        this.launchPic(staticPhoto)
    }

    setFileUrl(pURL){
        const { id } = this.state.user
        this.setState({photoUrl:pURL})
        this.addToDatabase()
    }

    addToDatabase(){
        // const { auth,email,id,name,user } = this.props.user.user
        const { photoUrl } = this.state
        const { id } = this.state.user
        const user_id = id
        const photo_url = photoUrl
        console.log('this is from addToDatabase',user_id,photo_url)
        axios.post(`/api/users/update/${user_id}`,{ photo_url })
        this.props.updateUser(user_id)
        
    }

    handlePhotoChange = async (e) => {
        const file = e.target.files[0];
        this.addPhoto(await file)
        this.handleFile(e)
    }

    addPhoto(photoFile){
        console.log(photoFile)
        // this.handleFile(photoFile)
        this.setState({staticPhoto:photoFile})
    }

    cancelAddPhoto(){
        this.setState({staticPhoto:null,file:null})
    }

    handleCancelClick(){
        this.cancelAddPhoto()
    }

    handleFile(event){
        this.setState({file:URL.createObjectURL(event.target.files[0])})
    }

    // ---temp functions for testing--//
    handleInfoClick(){
        this.giveMeInfo()
    }
    giveMeInfo(){
        const { photoUrl } = this.state
        const { id } = this.state.user
        console.log(id,photoUrl)
    }
    //  -------------------------//

    render(){

        const { email,name,user,photo } = this.props.user.user
        const { staticPhoto,file } = this.state
        // var file = document.getElementById('fileItem').files[0]

        return(
            <div>
                <section><h2 className="user-info-h2">edit user info</h2></section>
                <section className="user-photo"><img className="photo-properties" src={file} /> <input id="fileItem" type ="file" className="change-photo" onChange={e => this.handlePhotoChange(e)}/> <button onClick={this.handleCancelClick}>cancel</button> </section>
                <section className="input-section">
                    <ul className="input-list">
                        <li className="list-item"><p className="list-text">username</p><input placeholder={user}/></li>
                        <li className="list-item"><p className="list-text">first name</p><input placeholder={name}/></li>
                        <li className="list-item"><p className="list-text">last name</p><input placeholder="last name"/></li>
                        <li className="list-item"><p className="list-text">email address</p><input placeholder={email}/></li>
                        <li className="list-item"><button onClick={this.handleLaunchPic} className="li-button">submit</button><button className="li-button" onClick={this.props.edit}>cancel</button></li>
                    </ul>
                </section>
            </div>
        )
    }
     
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUser} )(EditUserInfo)