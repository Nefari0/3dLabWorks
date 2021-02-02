import React, { Component } from 'react'
import './Home.css'
import { connect } from 'react-redux'
// import { updateCharacters } from '../../ducks/breakingBadReducer'
import { loginUser } from '../../ducks/userReducer'
// import FirebaseTest from '.././FirebaseTest'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            user_name:'',
            password:''
        }
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.remindWhoUser = this.remindWhoUser.bind(this)
    }

    handleUserName(value){
        this.setState({...this.state,user_name:value})
    }

    handlePassword(value){
        this.setState({...this.state,password:value})
    }

    handleClick() {
        const { user_name, password } = this.state
        this.props.loginUser(user_name,password)
        this.setState({user_name:'',password:''})
    }

    remindWhoUser(){
        const { user_name, password } = this.state
        console.log(this.props.user.user.data)
    }

    render() {
        const { user_name, password } = this.state
        const { loginUser } = this.props
        // console.log(this.props) 
        return(
            <div className="home-container">
                <h2>{password}</h2>
                {/* <ion-icon src="/path/to/external/file.svg"></ion-icon> */}
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                {/* <svg classname="icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> */}
                    {/* <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /> */}
                {/* </svg> */}
                

                
                {/* <div className="login-container">
                    <p>user name</p><input value={user_name} onChange={e => this.handleUserName(e.target.value)}/>
                    <p>password</p><input value={password} onChange={e => this.handlePassword(e.target.value)}/>
                    <button onClick={this.handleClick}>execute</button>
                    <button onClick={this.remindWhoUser} >riminder</button>
                </div> */}
                
                {/* <FirebaseTest/>     */}
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(Home)

// export default Home