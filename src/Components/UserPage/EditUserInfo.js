import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser,loginUser } from '../../ducks/userReducer'
// import { store } from 'react-redux'
import './EditUserInfo.css'
import {app} from '../../base'
import axios from 'axios'

const db = app.firestore()

class EditUserInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_id:null,
            user_name:'',
            email:'',
            first:'',
            photoUrl:null,  // this is the url pulled from database used to access photo
            staticPhoto:null, //this is the photo in browser pending database entry
            file:null,
            user:{},
            setPermission:true,
            openNewPass:false,
            oldPassword:'',
            newPassword1:'',
            newPassword2:'',
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
        // this.handleFirstName = this.handleFile.bind(this)
        // this.handleLastName = this.handleLastName.bind(this)
        // this.handleEmail = this.handleEmail.bind(this)
        this.setPhotoUrl = this.setPhotoUrl.bind(this)
        this.getPhotoUrl = this.getPhotoUrl.bind(this)
        this.userInfoFromProps = this.userInfoFromProps.bind(this)
        // this.handleTextInput = this.handleTextInput.bind(this)
        this.launchNewPass = this.launchNewPass.bind(this)

        // temp functions for testing//
        this.handleInfoClick = this.handleInfoClick.bind(this)
        this.giveMeInfo = this.giveMeInfo.bind(this)
        // this.addToDeleted = this.addToDeleted.bind(this)
    }

    componentDidMount(){
        // const { email,photo,user,background_url,name,id } = this.props.user.user
        // this.setState({
        //     first:name,
        //     user_name:user,
        //     photoUrl:photo,
        //     background_url:background_url,
        //     email:email,
        //     user_id:id
        // })

        this.userInfoFromProps()

    }

    componentDidUpdate() {
        const  { setPermission } = this.state
        if (setPermission === true) {
            this.props.updateUser()
            this.userInfoFromProps()
            this.setState({
                setPermission:false
            })
        }
    }

    userInfoFromProps = () => {
        const { email,photo,user,background_url,name,id } = this.props.user.user
        // const { user, } = this.props
        this.setState({
            first:name,
            user_name:user,
            photoUrl:photo,
            background_url:background_url,
            email:email,
            user_id:id
        })
    }

    // adds file to firebase. sends all info to db callback function
    launchPic = async (file) => {
        const { staticPhoto,photoUrl } = this.state
        // const { photo } = this.state.user
        
        const { id,photo,user } = this.props.user.user
        // if(photo_url != null){
        //     this.deleteFromFirebase(photo_url)
        // }

        // ---------- original
        // const photoName = `profile pic ${id}`
        // const storageRef = app.storage().ref(`${user}/`)
        // const fileRef = storageRef.child(photoName + file.name)
        // fileRef.put(file).then(() => {
        //     console.log('photo uploaded',file)
        // })
        // this.setFileUrl(await fileRef.getDownloadURL())
        // console.log('this is fileRef', fileRef)
        // ----------------------------------
        this.props.setIsLoading()
        console.log('hit launch pic',photoUrl)
        // if (photo != null) {this.props.deleteFromFirebase(await photo)}
        const thePhoto = await this.getPhotoUrl(photoUrl)
        console.log('photo is added')
        this.setPhotoUrl(await thePhoto.getDownloadURL())
        console.log('got url')
        this.addToDatabase(this.state.photoUrl)
        this.props.updateUser()
        this.props.setIsLoading()
    }

    getPhotoUrl = async (input) => {
        const { user } = this.props.user.user 
        const storageRef = app.storage().ref(`${user}/photos`)
        const fileRef = storageRef.child(input.name)
        await fileRef.put(input)
        console.log('image loaded')
        return (fileRef)
    }

    setPhotoUrl = async (params) => {
        this.setState({photoUrl:params})
    }

    // deleteFromFirebase(url){
    //     const storageRef = app.storage().refFromURL(url)
    //     storageRef.delete().then(function deleted(params) {
    //         console.log('image deleted')
    //     }).catch(function (error) {
    //         console.log('there was an error')
    //     })
    // }

    handleLaunchPic(){
        const { staticPhoto } = this.state
        const { email,name,user,photo,id } = this.props.user.user
        // adds/updates profile photo
        if ( staticPhoto != null){this.launchPic(staticPhoto)} else {alert('please add photo')}

        if ( photo != null ) {
            // this.addToDeleted(photo,id)
            this.deleteFromFirebase(photo)
        } // adds current photo to db that tracks deleted items in firebase
        // adds/updates firstname


        
    }

    // addToDeleted(photo,id){
    //     const info = 'this is a profile picture that has been deleted'
    //     axios.post(`/api/firedata/`,{ id,photo,info })
    // }

    setFileUrl(pURL){
        const { id } = this.state.user
        this.setState({photoUrl:pURL})
        this.addToDatabase()
    }

    async addToDatabase(newPhoto){
        // const { auth,email,id,name,user } = this.props.user.user
        // const { photoUrl } = this.state
        const {
            first:first_name,
            user_name:user,
            photoUrl:photo,
            background_url:background_url,
            email:email,
            user_id
        } = this.state

        const photo_url = newPhoto
        // const { id } = this.state.user
        // const user_id = id
        // const photo_url = photoUrl
        console.log('this is from addToDatabase',user_id,newPhoto)
        // axios.post(`/api/users/update/${user_id}`,{ photo_url })
        axios.post(`/api/users/update/${user_id}`,{ photo_url,email,user,first_name })
        // this.props.updateUser(user_id)
        await this.props.updateUser()
        await this.userInfoFromProps()
        
    }

    handlePhotoChange = async (e) => {
        const file = e.target.files[0];
        this.addPhoto(await file)
        this.handleFile(e)
    }

    addPhoto(e){
        const file = e.target.files[0]
        this.setState({staticPhoto:URL.createObjectURL(file),photoUrl:file})
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

    handleAddText(prop,val){
        this.setState({
            [prop]: val
        })
    }

    // ---- edit names and email address ---- //
    // handleFirstName(val){
    //     this.setState({first_name : val})
    // }

    // handleLastName(val){
    //     this.setState({last_name : val})
    // }

    // handleEmail(val){
    //     this.setState({email : val})
    // }

    // handUserName(val){
    //     this.setState({usae})
    // }

    // handleTextInput = (props,val) => {
    //     this.setState({
    //         [props]:val
    //     })
    // }


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

    openChangePass() {
        this.setState({openNewPass:!this.state.openNewPass})
    }
    launchNewPass = async () => {
        this.setState({setPermission:true})
        // this.user
        const { newPassword1,newPassword2,oldPassword } = this.state
        const { user } = this.props.user.user
        const user_name = user
        // console.log('here is user',user_name)
        if(newPassword1 === newPassword2){
            // await this.props.changePassword(user_name,oldPassword,newPassword1,newPassword2)
            axios.post('/auth/password',{newPassword1,newPassword2,oldPassword,user_name}).then(res => {
                this.openChangePass()
                this.props.hideView('showEditUserInfo')
                // return (alert('Your password has been changed'))
            })
            // console.log('await?',newPassword1,user)
            // await this.props.updateUser()
        }
        // await this.userInfoFromProps()
    }
    // reLogin = () => {
    //     this.props.loginUser()
    // }

    render(){

        const { email,name,user,photo } = this.props.user.user
        const { staticPhoto,file,openNewPass } = this.state
        // var file = document.getElementById('fileItem').files[0]

        return(
            <div className="edit-user-info">
                {openNewPass ? <div className='change-pass-container'>
                    <input placeholder='Old Password' onChange={e => this.handleAddText('oldPassword',e.target.value)} ></input>
                    <input placeholder='New Password' onChange={e => this.handleAddText('newPassword1',e.target.value)} ></input>
                    <input placeholder='Verify New Password' onChange={e => this.handleAddText('newPassword2',e.target.value)} ></input>
                    <div className='change-pass-button-flex' >
                        <button onClick={() => {this.launchNewPass()}}>submit</button>
                        <button onClick={() => this.setState({openNewPass:false})}>cancel</button>
                    </div>
                </div> : null}
                {/* <section className="user-photo"><img className="photo-properties" src={file} /> <input id="fileItem" type ="file" className="change-photo" onChange={e => this.handlePhotoChange(e)}/> <button onClick={this.handleCancelClick}>cancel</button> </section> */}
                <section className="">
                    <div className="input-list">
                        <section><h2 style={{color:'#555'}}>edit user info</h2></section>
                        <input id="fileItem" type ="file" className="change-photo" accept="image/png,image/jpeg"/> <button onClick={() => this.openChangePass()}>change password</button>

                        <div>
                            <p className="list-text">Username</p><input placeholder={user} onChange={e => this.handleAddText('user_name', e.target.value)}/>
                        </div>


                        <div className="">
                            <p className="list-text">First Name</p><input placeholder={name} onChange={e => this.handleAddText('first_name', e.target.value)}/>
                        </div>

                        <div className="">
                            <p className="list-text">Last Name</p><input placeholder="last name" onChange={e => this.handleAddText('last_name', e.target.value)}/>
                        </div>

                        <div className="">
                            <p className="list-text">Email Address</p><input placeholder={email} onChange={e => this.handleAddText('email', e.target.value)} />
                        </div>
                        
                        <div >
                            <p style={{color:'#555'}}>Profile Picture</p>
                            <img className="photo-properties" src={staticPhoto} /> 
                            <div className="edit-photo-line">
                                <input id="fileItem" type ="file" className="change-photo" accept="image/png,image/jpeg" onChange={e => this.addPhoto(e)}/> <button onClick={this.handleCancelClick}>clear</button>
                            </div>
                        </div>

                        {/* <li className="user-photo"><img className="photo-properties" src={photo}/><button className="li-button">delete picture</button></li> */}
                        <div className=""><button onClick={this.launchPic} className="li-button">submit</button><button className="li-button" onClick={() => this.props.hideView('showEditUserInfo')} >cancel</button></div>
                    </div>
                </section>
            </div>
        )
    }
     
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUser,loginUser} )(EditUserInfo)