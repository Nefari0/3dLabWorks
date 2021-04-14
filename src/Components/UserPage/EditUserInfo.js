import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUserinfo } from '../../ducks/userReducer'
import './EditUserInfo.css'
import {app} from '../../base'

class EditUserInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_name:'',
            email:'',
            first_name:'',
            photoUrl:null,
            staticPhoto:null

        }
        this.handlePhotoChange = this.handlePhotoChange.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
        this.cancelAddPhoto = this.cancelAddPhoto.bind(this)
        this.handleCancelClick = this.handleCancelClick.bind(this)
    }

    handlePhotoChange = (e) => {
        const file = e.target.files[0];
        this.addPhoto(file)
    }

    addPhoto(photoFile){
        console.log(photoFile)
        this.setState({staticPhoto:photoFile})
    }

    cancelAddPhoto(){
        this.setState({staticPhoto:null})
    }

    handleCancelClick(){
        this.cancelAddPhoto()
    }

    render(){

        const { email,name,user,photo } = this.props.user.user
        const { staticPhoto } = this.state
        // var file = document.getElementById('fileItem').files[0]

        return(
            <div>
                <section><h2 className="user-info-h2">edit user info</h2></section>
                <section className="user-photo"><img className="photo-properties" src={staticPhoto} /> <input id="fileItem" type ="file" className="change-photo" onChange={e => this.handlePhotoChange(e)}/> <button onClick={this.handleCancelClick}>cancel</button> </section>
                <section className="input-section">
                    <ul className="input-list">
                        <li className="list-item"><p className="list-text">username</p><input placeholder={user}/></li>
                        <li className="list-item"><p className="list-text">first name</p><input placeholder={name}/></li>
                        <li className="list-item"><p className="list-text">last name</p><input placeholder="last name"/></li>
                        <li className="list-item"><p className="list-text">email</p><input placeholder={email}/></li>
                        <li className="list-item"><button>submit</button><button onClick={this.props.edit}>cancel</button></li>
                    </ul>
                </section>
            </div>
        )
    }
     
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {editUserinfo})(EditUserInfo)