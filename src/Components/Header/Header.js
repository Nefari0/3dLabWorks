import React, { Component } from 'react'
import { loginUser } from '../../ducks/userReducer'
import {logoutUser} from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './Header.css'
import { Link } from 'react-router-dom'
import MobileLogin from '../MobileLogin/MobileLogin'
import Register from '../Register/Register'

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
            this.setState({username:user.user.data.user,setPermission:false})
            // this.handleUserUpdate()
            // console.log('did update',user.user.data.user)
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
        // this.handleUserUpdate()
        const { isLoggedIn } = this.props.user
        console.log('header',username)
    return(
        <div className='header-container'>

            <h3 className="header-h3"> <b>{isLoggedIn ? `welcome,${this.props.user.user.data.user}!` :'header'}</b> </h3>

            {/* {username.user ? (
                <h3>{username.user}, Welcome!</h3>
                ) : (
                <h3 className="header-h3">header</h3>
                )} */}

            <ul className='link-list'>
                <Link to="/" style={{ textDecoration: 'none' }}><li className='link-item'><a>home</a></li></Link>
                <Link to="/about"><li className='link-item'><a>about</a></li></Link>
                <Link to="/explore"><li className='link-item'><a>projects</a></li></Link>
                <Link to="/sites" style={{ textDecoration: 'none' }}><li className='link-item'><a>some great sites</a></li></Link>
            </ul>

            {/* <div className="login-link" >
                <h4>{!isLoggedIn ? 'login':`logout`}</h4>
            </div> */}

            <div className="login-link" onClick={this.toggleLogin}>
                {!isLoggedIn ? (<h4 >login</h4>):(<h4>logout</h4>)}
            </div>

            <img onClick={this.toggleMenu} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"className="hamburger"/>

            <ul className={`mobile-nav ${isMenuOpen ? false : 'mobile-nav-hide'}`} onClick={this.toggleMenu}>
                <li className='mobile-link-item' onClick={this.toggleLogin}>sign in</li>
                <Link to="/"><li className='mobile-link-item'>home</li></Link>
                <Link to="/about"><li className='mobile-link-item'>about</li></Link>
                <Link to="/explore"><li className='mobile-link-item'>projects</li></Link>
                <Link to="/sites"><li className='mobile-link-item'>some great sites</li></Link>
            </ul>

            {!openLogin ? (<MobileLogin login={this.props.loginUser} logout={this.props.logoutUser} execute={this.handleClick} name={this.handleUserName} pass={this.handlePassword} hide={this.state.openLogin} exit={this.toggleLogin}/>):(<div></div>)}
        </div>
    )}
} 

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {loginUser, logoutUser})(Header)
// export default Header