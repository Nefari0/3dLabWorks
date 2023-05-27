import React, { Component } from 'react'
import axios from 'axios'
import { loginUser,logoutUser,updateUser,autoLogin,remoteLogin } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './Header.css'
import { Link } from 'react-router-dom'
import MobileLogin from '../MobileLogin/MobileLogin'
import Loading from '../Loading/Loading'
import cdLabs3d from '../../assets/cdLabs-logo-1-alpha.png'
import MM3D1 from '../../assets/MM3D2333x50orthofff.png'
import CDinits from '../../assets/CDinits.png'
// import profilePicPlaceHolder from '../../assets/profile-pic-placeholder.png'
import { 
    LoginIcon,
    LogoutIcon,
    InformationIcon,
    CubeIcon,
    IdIcon
 } from '../SVG2'

import { 
    HeaderContainer
 } from './header.styles'

import DesktopNavComponent from './desktop-nav.component'
import Button from '../../GlobalStyles/BaseButton/button.component'

class Header extends Component{
    constructor(props){
        super();

        this.state = {
            username:{},
            user_name:'',
            password:'',
            setPermission:true,
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
        // this.trackingHandler = this.trackingHandler.bind(this)
    }

    sessionToWindow(prop,val) {
        localStorage.setItem(prop,val)
    }

    async componentDidMount(prevProps) {
        
        const visited = localStorage['visited']
        // const browser = localStorage['assigned_browser']
        const savedUsername = localStorage['user_name']
        // const savedPassword = localStorage['password']
        
        // const last_visit = new Date().toString().split('(')[0]
        const last_visit = new Date()
        
        if(visited !== undefined && localStorage['user_name'] !== undefined){
            this.props.autoLogin(savedUsername,last_visit,visited).catch(err => {
                return console.log('there was an error',err)
            })
            
        }

        const getUniqueID = () => {
            const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            return s4() + s4() + '-' + s4();
          };

        if (visited === undefined) {
            const unique_id = getUniqueID()
            const assigned_browser = getUniqueID()
            this.sessionToWindow('visited',unique_id)
            this.sessionToWindow('assigned_browser',assigned_browser)
        }
    
        if(visited !== undefined){
            this.setState({unique_id:visited})
        }
        return
    }
    
    componentWillUpdate(){
        const { setPermission } = this.state
        const { user } = this.props
        // console.log('hit update')
        // this.trackAdminUser()
        if(user.isLoggedIn === true && setPermission===true){
            if(user.user.is_admin === true) {this.trackAdminUser(true)}
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
    // trackingHandler(tag) {
    //     const { unique_id } = this.state
    //     if(unique_id !== null){
            
    //         switch(tag) {
    //             case 'login':
    //                 return axios.post('/api/track/login/click/',{unique_id,tag}).catch(err => {console.log(err)})
    //             case 'projects':
    //                 return axios.post('/api/track/projects/click/',{unique_id,tag}).catch(err => {console.log(err)})
    //             case 'about':
    //                 return axios.post('/api/track/about/click/',{unique_id,tag}).catch(err => {console.log(err)})
    //         }
    //     }
    // }

    //  --- this block identifies brower as used during developent --- //
    trackAdminUser = (params) => {
        // const { is_admin } = this.props.user.user
        
        const unique_id = localStorage['visited']
        const isAdmin = params

        if(params === true && unique_id !== undefined){
            axios.post('/api/tracking/setIsAdmin',{unique_id,isAdmin}).then().catch(err => console.log(err))
        }
    }

    // --- ----------------------- --- //

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
        // const { menuOpen } = this.props.user 
        // const { user_name, password } = this.state
        const visited = localStorage['visited']
        const last_visit = new Date()
        await this.props.loginUser(signInName,signInPass,last_visit,visited)

        if (saveMyInfo === true && this.props.user.isLoggedIn === true) {
            localStorage.setItem('user_name',signInName)
        } else {localStorage.removeItem('visited')}
        this.toggleLogin()
        this.setState({user_name:'',password:''})
    }

    handleLogout() {
        // const { menuOpen } = this.props.user
        const getUniqueID = () => {
            const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            return s4() + s4() + '-' + s4();
          };
        localStorage.removeItem("user_name");
        localStorage.setItem("visited",getUniqueID())
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
        const { loginOpen } = this.props.user
        this.props.remoteLogin(!loginOpen)
    }

    setSaveSession() {
        this.setState({saveSession:!this.state.saveSession})
    }

    render() {
        const { 
            saveSession, 
            // username, 
            // unique_id, 
            isMenuOpen, 
            user_name, 
            // password, 
            // isLoggedInState 
        } = this.state
        const { isLoggedIn,isLoading,loginOpen } = this.props.user
        const { photo,user } = this.props.user.user

        const hamburger = () => {
            return(
            <svg
            className={`hamburger ${!isLoggedIn ? true : 'user-hamburger'}`} 
            onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            )
        }

    return(
        
        <HeaderContainer>

            {/* -- "Loading" display -- */}
            {isLoading === true ? <Loading /> : null}

            {/* ----- CD Logo ----- */}
            <img onClick={this.viewTheWindow}
                src={cdLabs3d}
                className="cd-logo"
                alt=""
            />
            <img onClick={this.viewTheWindow}
                src={CDinits}
                className="cd-logo-small"
                alt=""
            />
            {/* -------------------- */}

            <Link to="/" style={{textDecoration: 'none', color:'#fff' }}><img className="mm3d-logo" src={MM3D1} alt="" /></Link>
            
            {/* ---------- DESTOP NAV ---------------------------- */}
            <DesktopNavComponent 
                user={user}
                isLoggedIn={isLoggedIn}
                toggleLogin={this.toggleLogin}
            />
            {/* -------------------------------------------------- */}


            {/* ---------- MOBILE NAV / ITEMS ---------------------------- */}
            {isLoggedIn && <img src={photo} className="loggedin-user-photo" alt="" />}
           
            {hamburger()}

            <ul className={`mobile-nav ${isMenuOpen ? false : 'mobile-nav-hide'}`} style={{paddingTop:'10px'}} onClick={() => this.toggleMenu()} >

                {!isLoggedIn ? (isMenuOpen === true ? 
                <li onClick={this.toggleLogin}>
                    <LoginIcon />
                        <p>Login</p>
                </li> : null)

                :

                (isMenuOpen === true ?  
                <li onClick={this.toggleLogin}>
                    <LogoutIcon />
                    <p>Logout</p>
                </li> : null)}

                {isMenuOpen === true ? 
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <li >
                        <InformationIcon />
                        <p>About</p>
                    </li>
                </Link> : null}

                {isMenuOpen === true ?
                <Link to="/explore" style={{ textDecoration: 'none' }}>
                    <li>
                        <CubeIcon />
                        <p>Explore</p>
                    </li>
                </Link> : null}

                {!isLoggedIn === true && isMenuOpen === true ? (<div></div>)
                : 
                (isMenuOpen === true ?
                <Link to="/user" style={{ textDecoration: 'none' }}>
                    <li>
                        <IdIcon />
                        <p>My page</p>
                    </li>
                </Link> : null)}
            </ul>
            {/* ----------------------------------------------------------------- */}

                {loginOpen ? (<MobileLogin current_user={user_name} setSaveSession={this.setSaveSession} logout={this.handleLogout} execute={this.handleClick} name={this.handleUserName} pass={this.handlePassword} hide={this.state.openLogin} exit={this.toggleLogin} isLoggedIn={this.props.user.isLoggedIn} saveSession={saveSession} />):(<div className="blank-div"></div>)}
        </HeaderContainer>
          
    )}
} 

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {loginUser, logoutUser, updateUser, autoLogin, remoteLogin})(Header)