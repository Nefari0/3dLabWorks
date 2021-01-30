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
                <ion-icon src="/path/to/external/file.svg"></ion-icon>
                

                
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