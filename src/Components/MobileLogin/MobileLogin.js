import { useState, useEffect } from 'react'
import './MobileLogin.css'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../ducks/userReducer'
import { Link } from 'react-router-dom'

const MobileLogin = (props) => {

    const { isLoggedIn,saveSession } = props
    
    const { user_name, setUsername } = useState('')
    const { password, setPassword } = useState('')
    const { saveInfo,setSaveInfo } = useState(false)

    return(
        <div className={`login-container`}>
        <p>username</p><input value={user_name} onChange={e => props.name(e.target.value)} className="input-element"/>
        <p>password</p><input value={password} onChange={e => props.pass(e.target.value)} className="input-element" type="password" />
        {/* <div className="input-element"> */}
        <ul className="buttons">
            {!isLoggedIn ? (<button onClick={props.execute} className="non-link-button">login</button>) :
            (<Link to="/" style={{textDecoration: "none"}}><button onClick={props.logout} className="non-link-button">logout</button></Link>)}
            {isLoggedIn ? (<div></div>) : (<Link to="/register" style={{ textDecoration: 'none' }}><button onClick={props.exit}>register</button></Link>)}
            <button onClick={props.exit}>cancel</button>
            {/* <a ><svg style={{marginLeft:'10px',marginRight:'20px', height:'20px',width:'20px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg></a> */}
            <p style={{fontSize:'10px',marginBottom:'5px',marginLeft:'10px'}} >stay logged in?</p>

            {!saveSession ?
            <svg onClick={() => props.setSaveSession()} style={{marginLeft:'10px',marginRight:'20px', height:'20px',width:'20px',opacity:'60%',marginTop:'10px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            :
            <svg onClick={() => props.setSaveSession()} style={{marginLeft:'10px',marginRight:'20px', height:'20px',width:'20px',opacity:'60%',marginTop:'10px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}

        </ul>

    </div>
    )

}
export default MobileLogin