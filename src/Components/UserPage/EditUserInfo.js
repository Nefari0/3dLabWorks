import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUserInfo } from '../../ducks/userReducer'

class EditUserInfo extends Component {
    constructor(){
        super();

        this.state = {
            user_name:'',
            email:'',
            first_name:''
        }
    }

    render(){

        return(
            <div><h2>This is edit user info</h2></div>
        )
    }
     
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {editUserInfo})(EditUserInfo)