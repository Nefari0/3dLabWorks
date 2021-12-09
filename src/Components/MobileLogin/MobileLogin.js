import { useState, useEffect } from 'react'
import './MobileLogin.css'
import { Link } from 'react-router-dom'

const MobileLogin = (props) => {

    const { isLoggedIn,saveSession,current_user } = props
    
    const { user_name, setUsername } = useState('')
    const { password, setPassword } = useState('')
    const { saveInfo,setSaveInfo } = useState(false)

    return(
        <div className={`plogin-container`}>
        <section className="login-title">

            <svg className="close-button" style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} onClick={props.exit} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            
            <h2 style={{textTransform:'none'}} >Log In to Your Accout</h2></section>
        <section className="form">
        <input value={user_name} onChange={e => props.name(e.target.value)} placeholder="Username" className="log-input log-form-length disabled" style={{paddingBottom:'5px',marginTop:'20px'}}/>
        <input value={password} onChange={e => props.pass(e.target.value)} placeholder="Password" className="log-input log-form-length disabled" style={{paddingBottom:'5px',marginTop:'17px'}} type="password" />
 
        {/* <div className="input-element"> */}
        <ul className="keep-session log-form-length">

            <div className="keep-session-check">
            {!saveSession ?
            // <svg onClick={() => props.setSaveSession()} style={{ marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fillRule="currentColor">
            //     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            // </svg>
            <svg onClick={() => props.setSaveSession()} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            :
            // <svg onClick={() => props.setSaveSession()} style={{marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px',color:'#fff'}} xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 24 24" stroke="currentColor">
            //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            // </svg>
            <svg onClick={() => props.setSaveSession()} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }
            <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px'}} >stay logged in?</p>
        </div>
            <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px', color:'blue' }} >Forgot password?</p>
        </ul>

        {!isLoggedIn ? <a className="login-button log-form-length" onClick={props.execute} >Log In</a> : <a className="login-button log-form-length" onClick={props.logout} >Log Out</a>}

        {!isLoggedIn ? <div className="build-account" ><p>Need an account?</p><Link to="/register" style={{ textDecoration: 'none' }}><a style={{fontWeight:'400',color:"blue"}} onClick={props.exit}>Sign up</a></Link></div> : <div className="build-account" ><p>Logged in as:</p><a style={{fontWeight:'400',color:"blue"}} onClick={props.exit}>{current_user}</a></div>}
        </section>
    </div>
    )

}
export default MobileLogin