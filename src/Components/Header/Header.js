import React, { Component } from 'react'
import { loginUser,logoutUser } from '../../ducks/userReducer'
// import {} from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './Header.css'
import { Link } from 'react-router-dom'
import MobileLogin from '../MobileLogin/MobileLogin'
import UserPage from '../UserPage/UserPage'
// import Register from '../Register/Register'

class Header extends Component{
    constructor(props){
        super();

        this.state = {
            username:{},
            user_name:'',
            password:'',
            setPermission:true,
            openLogin:true
        }
        this.handleLogging = this.handleLogging.bind(this)
        this.resetState = this.resetState.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
    }

    componentDidMount(){
        // console.log('component did mount',this.state.username)
    }
    
    componentWillUpdate(){
        const { setPermission } = this.state
        const { user } = this.props

        if(user.isLoggedIn === true && setPermission===true){
            // this.setState({username:user.user.data.user,setPermission:false})
            this.setState({username:user.user.user.user,setPermission:false})
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
        this.setState({user_name:'',password:''})
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
        const { username, isMenuOpen, user_name, password, openLogin } = this.state
        const { isLoggedIn } = this.props.user
    return(
        <div className='header-container'>

            <h3 className="header-h3">{isLoggedIn ? `welcome,${this.props.user.user.user}!` :'MadModels3d'}</h3>

            <ul className='link-list'>
                <Link to="/" style={{ textDecoration: 'none' }}><li className='link-item'><a>home</a></li></Link>
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
                <Link to="/" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>home</li></Link>
                <Link to="/about" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>about</li></Link>
                <Link to="/explore" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>projects</li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='mobile-link-item'><a>my page</a></li></Link>)}
            </ul>

            {!openLogin ? (<MobileLogin login={this.props.loginUser} logout={this.props.logoutUser} execute={this.handleClick} name={this.handleUserName} pass={this.handlePassword} hide={this.state.openLogin} exit={this.toggleLogin}/>):(<div className="blank-div"></div>)}
        </div>
    )}
} 

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {loginUser, logoutUser})(Header)