import React, { Component } from 'react'
import axios from 'axios'
import { loginUser,logoutUser,updateUser } from '../../ducks/userReducer'
// import {} from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './Header.css'
import { Link } from 'react-router-dom'
import MobileLogin from '../MobileLogin/MobileLogin'
import UserPage from '../UserPage/UserPage'
// import Register from '../Register/Register'
import { withRouter } from 'react-router'
import BaseBackend from '../../BaseBackend'

class Header extends Component{
    constructor(props){
        super();

        this.state = {
            username:{},
            user_name:'',
            password:'',
            setPermission:true,
            openLogin:true,
            isLoggedInState:null
        }
        this.handleLogging = this.handleLogging.bind(this)
        this.resetState = this.resetState.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    async componentDidMount(prevProps) {
        this.props.updateUser()
        let res = await axios.get(`/auth/update/session`)
        console.log(res)
        // if (res.data.isLoggedIn) this.props.history.push('/user')
      }
    
    componentWillUpdate(){
        const { setPermission } = this.state
        const { user } = this.props

        if(user.isLoggedIn === true && setPermission===true){
            
            // this.setState({username:user.user.data.user,setPermission:false})
            this.setState({username:user.user.user.user,isLoggedInState:user.isLoggedIn,setPermission:false})
        }   
    }

    componentDidUpdate(prevProps){
        console.log('prev props',prevProps)
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

    handleClick() {
        const { user_name, password } = this.state
        this.props.loginUser(user_name,password)
        this.toggleLogin()
        this.setState({user_name:'',password:''})
    }

    handleLogout() {
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

            
    

    render() {
        const { username, isMenuOpen, user_name, password, openLogin, isLoggedInState } = this.state
        const { isLoggedIn } = this.props.user


    return(
        <div className='header-container'>

            <img 
            src="https://firebasestorage.googleapis.com/v0/b/depot-7bb3e.appspot.com/o/logo.png?alt=media&token=3d889013-f357-4d66-adc2-286bdb367ce6"
            className="cd-logo"
            />

            <Link to="/" style={{textDecoration: 'none', color:'#fff' }}><h3 className="header-h3">{isLoggedIn ? `Welcome, ${this.props.user.user.user}!` :'MadModels3d'}</h3></Link>

            <ul className='link-list'>
                {/* <Link to="/" style={{ textDecoration: 'none' }}><li className='link-item'><a>home</a></li></Link> */}
                <Link to="/about" style={{ textDecoration: 'none' }}><li className='link-item'><a>about</a></li></Link>
                <Link to="/explore" style={{ textDecoration: 'none' }}><li className='link-item'><a>projects</a></li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='link-item'><a>my page</a></li></Link>)}
            </ul>

            <div className="login-link" onClick={this.toggleLogin}>
                {!isLoggedIn ? (<h4 className="login-logout">login</h4>):(<h4 className="login-logout">logout</h4>)}
            </div>

            <svg className="hamburger" onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <ul className={`mobile-nav ${isMenuOpen ? false : 'mobile-nav-hide'}`} onClick={this.toggleMenu}>
                <li className='mobile-link-item' onClick={this.toggleLogin}>sign in</li>
                {/* <Link to="/" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>home</li></Link> */}
                <Link to="/about" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>about</li></Link>
                <Link to="/explore" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>projects</li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='mobile-link-item'><a>my page</a></li></Link>)}
            </ul>

            {!openLogin ? (<MobileLogin login={this.props.loginUser} logout={this.handleLogout} execute={this.handleClick} name={this.handleUserName} pass={this.handlePassword} hide={this.state.openLogin} exit={this.toggleLogin} isLoggedIn={this.props.user.isLoggedIn}/>):(<div className="blank-div"></div>)}
        </div>
    )}
} 

function mapStateToProps(reduxState){
    return reduxState
    // return {
    //     user:reduxState.username
    // }

}

export default connect(mapStateToProps, {loginUser, logoutUser, updateUser})(Header)

// export default connect(mapStateToProps, {   updateUser})(Header)
// export default withRouter(connect(null, {loginUser, logoutUser, updateUser})(Header))