import React, { Component } from 'react'
import axios from 'axios'
import { loginUser,logoutUser,updateUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './Header.css'
import { Link } from 'react-router-dom'
import MobileLogin from '../MobileLogin/MobileLogin'
import UserPage from '../UserPage/UserPage'
import { withRouter } from 'react-router'
import Loading from '../Loading/Loading'

class Header extends Component{
    constructor(props){
        super();

        this.state = {
            username:{},
            user_name:'',
            password:'',
            setPermission:true,
            openLogin:true,
            isLoggedInState:null,
            saveSession:false
        }
        this.handleLogging = this.handleLogging.bind(this)
        this.resetState = this.resetState.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.setSaveSession = this.setSaveSession.bind(this)

    // --- this function saves user info to browser
        this.sessionToWindow = this.sessionToWindow.bind(this)
    }

    sessionToWindow(prop,val) {
        localStorage.setItem(prop,val)
    }

    async componentDidMount(prevProps) {
        const savedUsername = localStorage['user_name']
        const savedPassword = localStorage['password']
        if (localStorage['user_name'] != undefined && localStorage['password'] != undefined) {
            this.props.loginUser(savedUsername,savedPassword)

        }
      }
    
    componentWillUpdate(){
        const { setPermission } = this.state
        const { user } = this.props

        if(user.isLoggedIn === true && setPermission===true){
            this.setState({username:user.user.user.user,isLoggedInState:user.isLoggedIn,setPermission:false})
        }   
    }

    resetState(){
        this.setState({
            setPermission:false,
            username:{},
            user_name:'',
            password:'',
            isMenuOpen:false,
            toggleHideLoggin:true
        })
    }

    handleLogging(){
        const { user_name, password } = this.state
        const { loginUser,logoutUser } = this.props
        this.toggleLogin()
        if(this.props.isLoggedIn === false){
            loginUser(user_name,password)
        } else {logoutUser()}
    }

    toggleMenu(){
        this.setState({isMenuOpen: !this.state.isMenuOpen})
    }

    async handleClick(signInName,signInPass,saveMyInfo) {

        await this.props.loginUser(signInName,signInPass)

        if (saveMyInfo === true && this.props.user.isLoggedIn === true) {
            localStorage.setItem('user_name',signInName)
            localStorage.setItem('password',signInPass)
        }

        this.toggleLogin()
        this.setState({user_name:'',password:''})
    }

    handleLogout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("password");
        this.toggleLogin()
        this.props.logoutUser()
    }

    handleUserName(value){
        this.setState({...this.state,user_name:value})
    }

    handlePassword(value){
        this.setState({...this.state,password:value})
    }

    toggleLogin(){
        this.setState({openLogin: !this.state.openLogin})
    }

    setSaveSession() {
        this.setState({saveSession:!this.state.saveSession})
    }

            
    

    render() {
        const { saveSession, username, isMenuOpen, user_name, password, openLogin, isLoggedInState } = this.state
        const { isLoggedIn,isLoading } = this.props.user

    return(
        <div className='header-container'>
            {isLoading === true ? <Loading /> : null}
            <img onClick={this.viewTheWindow}
                src="https://firebasestorage.googleapis.com/v0/b/depot-7bb3e.appspot.com/o/logo.png?alt=media&token=3d889013-f357-4d66-adc2-286bdb367ce6"
                className="cd-logo"
                />

            <Link to="/" style={{textDecoration: 'none', color:'#fff' }}><h3 className="header-h3">{isLoggedIn ? `Welcome, ${this.props.user.user.user}!` :'MadModels3d'}</h3></Link>

            <ul className='link-list'>
                <Link to="/about" style={{ textDecoration: 'none' }}><li className='link-item'><a>about</a></li></Link>
                <Link to="/explore" style={{ textDecoration: 'none' }}><li className='link-item'><a>projects</a></li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='link-item'><a>my page</a></li></Link>)}
            </ul>

            {!isLoggedIn ? (<h4 className="login-link" onClick={this.toggleLogin} >Login</h4>):(<h4 className="login-link" onClick={this.toggleLogin} >Log Out</h4>)}


            <svg className="hamburger" onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <ul className={`mobile-nav ${isMenuOpen ? false : 'mobile-nav-hide'}`} onClick={this.toggleMenu}>
                {!isLoggedIn ? <li className='mobile-link-item' onClick={this.toggleLogin}>login</li>:<li className='mobile-link-item' onClick={this.toggleLogin}>logout</li>}
                <Link to="/about" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>about</li></Link>
                <Link to="/explore" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>projects</li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='mobile-link-item'><a>my page</a></li></Link>)}
            </ul>

            {!openLogin ? (<MobileLogin current_user={user_name} setSaveSession={this.setSaveSession} login={this.props.loginUser} logout={this.handleLogout} execute={this.handleClick} name={this.handleUserName} pass={this.handlePassword} hide={this.state.openLogin} exit={this.toggleLogin} isLoggedIn={this.props.user.isLoggedIn} saveSession={saveSession} />):(<div className="blank-div"></div>)}
        </div>
    )}
} 

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {loginUser, logoutUser, updateUser})(Header)