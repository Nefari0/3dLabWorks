import React, { Component } from 'react'
import axios from 'axios'
import { loginUser,logoutUser,updateUser,autoLogin } from '../../ducks/userReducer'
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
        // this.trackingHandler = this.trackingHandler.bind(this)
    }

    sessionToWindow(prop,val) {
        localStorage.setItem(prop,val)
    }

    async componentDidMount(prevProps) {
        
        const visited = localStorage['visited']
        const browser = localStorage['assigned_browser']
        const savedUsername = localStorage['user_name']
        // const savedPassword = localStorage['password']
        
        // const last_visit = new Date().toString().split('(')[0]
        const last_visit = new Date()
        
        if(visited != undefined && localStorage['user_name'] != undefined){
            // this.props.loginUser(savedUsername,savedPassword,last_visit,visited).catch(err =>{
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
            // axios.post('/api/track/new/',{unique_id}).then(res => this.sessionToWindow('visited',res.data))
            // axios.post('/api/track/new/',{unique_id,assigned_browser}).then(res => 
            //     this.sessionToWindow('browser_id',res.data)
            //     )
        }
        //  else {
            // const unique_id = browser
            
            // axios.post('/api/track/increment/',{unique_id,last_visit,browser}).catch(err => {
            //     console.log('here is the error',err)
            //     localStorage.removeItem('visited')
            //     const unique_id = getUniqueID()
            //     axios.post('/api/track/new/',{unique_id,browser}).then(res => this.sessionToWindow('visited',res.data))
            // })
            // this.setState({unique_id:localStorage['visited']})
        // }
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
        // console.log('hit in header',unique_id,params)
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
        const visited = localStorage['visited']
        const last_visit = new Date()
        // console.log('is visited defined',localStorage)
        await this.props.loginUser(signInName,signInPass,last_visit,visited)

        if (saveMyInfo === true && this.props.user.isLoggedIn === true) {
            localStorage.setItem('user_name',signInName)
            // localStorage.setItem('password',signInPass)
        } else {localStorage.removeItem('visited')}

        this.toggleLogin()
        this.setState({user_name:'',password:''})
    }

    handleLogout() {
        const getUniqueID = () => {
            const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            return s4() + s4() + '-' + s4();
          };
        localStorage.removeItem("user_name");
        localStorage.setItem("visited",getUniqueID())
        // localStorage.removeItem("password");
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
        // this.trackingHandler('login')
        this.setState({openLogin: !this.state.openLogin})
    }

    setSaveSession() {
        this.setState({saveSession:!this.state.saveSession})
    }

            
    

    render() {
        const { saveSession, username, unique_id, isMenuOpen, user_name, password, openLogin, isLoggedInState } = this.state
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
                <Link to="/about" style={{ textDecoration: 'none' }}><li className='link-item'><a >About</a></li></Link>
                <Link to="/explore" style={{ textDecoration: 'none' }}><li className='link-item'><a>Explore</a></li></Link>
                {!isLoggedIn ? (<div></div>) : (<Link to="/user" style={{ textDecoration: 'none' }}><li className='link-item'><a>My Page</a></li></Link>)}
            </ul>

            {!isLoggedIn ? (<h4 className="login-link" onClick={this.toggleLogin} >Login</h4>):(<h4 className="login-link" onClick={this.toggleLogin} >Log Out</h4>)}


            <svg className="hamburger" onClick={this.toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <ul className={`mobile-nav ${isMenuOpen ? false : 'mobile-nav-hide'}`} onClick={this.toggleMenu}>
                {!isLoggedIn ? (isMenuOpen === true ? <Link style={{ textDecoration: 'none',marginTop:'10px'  }}><li className='mobile-link-item' onClick={this.toggleLogin}>
                <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" style={{color:'#fff',marginLeft:'20[x'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                    <a>Login</a>
                    </li></Link> : null)
                    :
                    (isMenuOpen === true ? <Link to="" style={{ textDecoration: 'none',marginTop:'10px' }}><li className='mobile-link-item' onClick={this.toggleLogin}>
                <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" style={{color:'#fff',marginLeft:'20[x'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <a>Logout</a>
                </li></Link> : null)}
                {isMenuOpen === true ? <Link to="/about" style={{ textDecoration: 'none' }}><li className='mobile-link-item' >
                <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    <a>About</a></li></Link> : null}
                {isMenuOpen === true ? <Link to="/explore" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>
                <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                    <a>Projects</a></li></Link> : null}
                {!isLoggedIn === true && isMenuOpen === true ? (<div></div>) : (isMenuOpen === true ? <Link to="/user" style={{ textDecoration: 'none' }}><li className='mobile-link-item'>
                <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <a>My page</a></li></Link> : null)}
            </ul>

            {!openLogin ? (<MobileLogin current_user={user_name} setSaveSession={this.setSaveSession} logout={this.handleLogout} execute={this.handleClick} name={this.handleUserName} pass={this.handlePassword} hide={this.state.openLogin} exit={this.toggleLogin} isLoggedIn={this.props.user.isLoggedIn} saveSession={saveSession} />):(<div className="blank-div"></div>)}
        </div>
    )}
} 

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {loginUser, logoutUser, updateUser, autoLogin})(Header)