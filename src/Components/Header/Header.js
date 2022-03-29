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
            saveSession:false,
            unique_id:null,
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
        this.trackingHandler = this.trackingHandler.bind(this)
    }

    sessionToWindow(prop,val) {
        localStorage.setItem(prop,val)
    }

    async componentDidMount(prevProps) {
        
        const visited = localStorage['visited']
        const savedUsername = localStorage['user_name']
        const savedPassword = localStorage['password']
        // const last_visit = new Date().toString()
        const last_visit = new Date().toString().split('(')[0]
        // console.log('last visit', last_visit)
        if (localStorage['user_name'] != undefined && localStorage['password'] != undefined) {
            this.props.loginUser(savedUsername,savedPassword,last_visit,visited)
            
        }

        const getUniqueID = () => {
            const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            return s4() + s4() + '-' + s4();
          };

        if (visited === undefined) {
            // console.log('visited is not defined')
            const unique_id = getUniqueID()
            await axios.post('/api/track/new/',{unique_id}).then(res => this.sessionToWindow('visited',res.data))
        } else {
            const unique_id = visited
            // const last_visit = new Date().toString()
            axios.post('/api/track/increment/',{unique_id,last_visit}).catch(err => {
                console.log('here is the error',err)
                localStorage.removeItem('visited')
                const unique_id = getUniqueID()
                axios.post('/api/track/new/',{unique_id}).then(res => this.sessionToWindow('visited',res.data))
            })
            this.setState({unique_id:localStorage['visited']})
        }
        if(visited !== undefined){this.setState({unique_id:visited})}
        return
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

    // --- handles tracked info --- //
    trackingHandler(tag) {
        const { unique_id } = this.state
        if(unique_id !== null){
            // axios.post('/api/track/add/click/',{unique_id,tag}).catch(err => {console.log(err)})
            switch(tag) {
                case 'login':
                    return axios.post('/api/track/login/click/',{unique_id,tag}).catch(err => {console.log(err)})
                case 'projects':
                    return axios.post('/api/track/projects/click/',{unique_id,tag}).catch(err => {console.log(err)})
                case 'about':
                    return axios.post('/api/track/about/click/',{unique_id,tag}).catch(err => {console.log(err)})
            }
        }
    }

    handleLogging(){
        const { user_name, password } = this.state
        const { loginUser,logoutUser } = this.props
        const last_visit = new Date()
        const visited = localStorage['visited']
        this.toggleLogin()
        if(this.props.isLoggedIn === false){
            loginUser(user_name,password,last_visit,visited)
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
        this.trackingHandler('login')
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
                <Link onClick={() => this.trackingHandler('about')} to="/about" style={{ textDecoration: 'none' }}><li className='link-item'><a>about</a></li></Link>
                <Link onClick={() => this.trackingHandler('projects')} to="/explore" style={{ textDecoration: 'none' }}><li className='link-item'><a>projects</a></li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='link-item'><a>my page</a></li></Link>)}
            </ul>

            {!isLoggedIn ? (<h4 className="login-link" onClick={this.toggleLogin} >Login</h4>):(<h4 className="login-link" onClick={this.toggleLogin} >Log Out</h4>)}


            <svg className="hamburger" onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <ul className={`mobile-nav ${isMenuOpen ? false : 'mobile-nav-hide'}`} onClick={this.toggleMenu}>
                {!isLoggedIn ? <li className='mobile-link-item' onClick={this.toggleLogin}>login</li>:<li className='mobile-link-item' onClick={this.toggleLogin}>logout</li>}
                <Link onClick={() => this.trackingHandler('about')} to="/about" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>about</li></Link>
                <Link onClick={() => this.trackingHandler('projects')} to="/explore" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>projects</li></Link>
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