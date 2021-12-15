import { useState, useEffect } from 'react'
import './Prototyping.css'
import { Link } from 'react-router-dom'
import { registerUser } from '../../ducks/userReducer'
import Agreement from '../Register/Agreement'

const Prototyping = (props) => {

    const { isLoggedIn,saveSession,current_user } = props
    
    const [ user_name, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    // const [ new_user_name, setNewUserName ] = useState('')
    // const [ new_password, setNewPassword ] = useState('')
    const { saveInfo,setSaveInfo } = useState(false)
    const [ signup,setSignup ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ first_name, setFirstName] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ photo_url, setPhoto ] = useState('')
    const [ is_admin ] = useState(false)
    const [ iAgree, setIAgree ] = useState(false)
    const [ openIAgree, setOpenIAgree ] = useState(false)

    const selectSignUp = () => {
        console.log(signup)
        setSignup(!signup)
    }

    const executeIAgree = () => {
        setIAgree(!iAgree)
        console.log(iAgree)
    }

    const executeRegister = () => {
        if (iAgree === true) {
        registerUser(user_name, password, email, first_name, is_admin)
        // props.history.push('/user')
    } else {
        return (alert('please agree to conditions'))
    }
    props.exit()
    }

    const openAgreement = () => {
        setOpenIAgree(!openIAgree)
        console.log(openIAgree)
    }

    return(
        <div className={`plogin-container ${!signup ? true : 'plogin-Container r-selected'}`}>
        {/* <section className="login-title"> */}
        <section className={`login-title ${!signup ? true : 'rlogin-title'}`}>

            <svg className="close-button" style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} onClick={props.exit} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            
            {!signup ? <h2 style={{textTransform:'none'}} >Log In to Your Accout</h2> : <h2 style={{textTransform:'none'}} >Create Account</h2>}</section>
        {!signup ? <section className="form">
        <input value={user_name} onChange={e => props.name(e.target.value)} placeholder="Username" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'20px'}}/>
        <input value={password} onChange={e => props.pass(e.target.value)} placeholder="Password" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'17px'}} type="password" />
 
        <ul className="keep-session log-form-length">

            <div className="keep-session-check">
            {!saveSession ?
            <svg onClick={() => props.setSaveSession()} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            :
            <svg onClick={() => props.setSaveSession()} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }
            <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px'}} >stay logged in?</p>
        </div>
            <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px', color:'blue' }} >Forgot password?</p>
        </ul>

        {!isLoggedIn ? <a className="login-button" onClick={props.execute} >Log In</a> : <a className="login-button" onClick={props.logout} >Log Out</a>}

        {!isLoggedIn ? <div className="build-account" ><p>Need an account?</p><a style={{fontWeight:'400',color:"blue"}} onClick={selectSignUp}>Sign up</a></div> : <div className="build-account" ><p>Logged in as:</p><a style={{fontWeight:'400',color:"blue"}} onClick={props.exit}>{current_user}</a></div>}
        </section>
        :
        <section className="rform">
                {/* {!openIAgree ? <Agreement/> : null} */}
                <input value={user_name} onChange={e => setUsername(e.target.value)} placeholder="Username" className="log-input log-form-length disabled" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="log-input log-form-length disabled" style={{marginTop:'17px',marginBottom:'2px'}} type="password" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="log-input log-form-length disabled" style={{marginTop:'17px',marginBottom:'2px'}} />
                <input value={first_name} onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="log-input log-form-length disabled" style={{marginTop:'17px',marginBottom:'2px'}} />
                <input value={last_name} onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="log-input log-form-length disabled" style={{marginBottom:'20px',marginTop:'17px'}} />

            <div className="keep-session-check">
            {!iAgree ?
            <svg onClick={executeIAgree} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            :
            <svg onClick={executeIAgree} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }
            <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px'}} onClick={openAgreement} >I agree to terms and conditions</p>
            </div>

                <a className="login-button" style={{marginTop:'10px'}} onClick={executeRegister} >Sign Up</a>
                <div className="build-account" ><a style={{fontWeight:'400',color:"blue"}} onClick={selectSignUp}>Cancel</a></div>
            </section>
        }
    </div>
    )

}
export default Prototyping