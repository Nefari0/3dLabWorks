import { useState } from 'react'
import './MobileLogin.css'
import { loginUser,registerUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import Agreement from '../Register/Agreement'

const MobileLogin = (props) => {

    const { isLoggedIn } = props
    const { user,photo } = props.user.user
    
    const [ user_name, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ saveInfo,setSaveInfo ] = useState(true)
    const [ signup,setSignup ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ first_name, setFirstName] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ photo_url, setPhoto ] = useState('')
    const [ is_admin ] = useState(false)
    const [ is_sudo ] = useState(false)
    const [ iAgree, setIAgree ] = useState(false)
    const [ openIAgree, setOpenIAgree ] = useState(true)

    const selectSignUp = () => {
        setSignup(!signup)
    }

    const executeIAgree = () => {
        setIAgree(!iAgree)
    }

    const executeRegister = () => {
        if (iAgree === true) {
        props.registerUser(user_name, password, email, first_name, is_admin, is_sudo)
    } else {
        return (alert('please agree to conditions'))
    }
    props.exit()
    }

    const openAgreement = () => {
        setOpenIAgree(!openIAgree)
    }

    const getLoggedIn = async () => {
        props.execute(user_name,password,saveInfo)
    }
    
    return(
   
        <div className={`plogin-container ${!signup ? true : `plogin-Container r-selected ${openIAgree ? true : `plogin-container r-selected agree-view`}`}`} >
        
        <section className={`login-title ${!signup ? true : `rlogin-title ${openIAgree ? true : `rlogin-title rlogin-title-agreement`}`}`}>

            <svg className="close-button" style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} onClick={props.exit} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            
            {!signup ? (!isLoggedIn ? <h2 style={{textTransform:'none'}} >Log In to Your Accout</h2> : <h2 style={{textTransform:'none'}} >Log Out</h2>) : <h2 style={{textTransform:'none'}} >Create Account</h2>}</section>
        {!signup ? <section className="form">

        {isLoggedIn ? <img style={{height:'100px',borderRadius:'50%',marginTop:'20px'}} src={photo} /> : null}

        {!isLoggedIn ? <input value={user_name} onChange={e => setUsername(e.target.value)} placeholder="Username" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'21px'}}/> : null}

        {! isLoggedIn ? <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'17px'}} type="password" /> : null}



        {!isLoggedIn ? <ul className="keep-session log-form-length">

            <div className="keep-session-check">
             
                <svg onClick={() => setSaveInfo(!saveInfo)} style={{ color:'#3c598e',marginLeft:'0px',marginRight:'2px', height:'20px',width:'20px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {saveInfo === false ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />:
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                </svg>
                
                <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px'}} >stay logged in?</p>
            </div>
            <p style={{fontSize:'10px',marginBottom:'0px',marginLeft:'0px', color:'blue' }} >Forgot password?</p>
        </ul> : <div className="keep-session log-form-length"></div>}

        {!isLoggedIn ? <a className="login-button" onClick={getLoggedIn} >Log In</a> : <a className="login-button" onClick={props.logout} >Log Out</a>}

        {!isLoggedIn ? <div className="build-account" ><p>Need an account?</p><a style={{fontWeight:'400',color:"blue"}} onClick={selectSignUp}>Sign up</a></div> : <div className="build-account" ><p>Logged in as:</p><a style={{fontWeight:'400',color:"blue"}}>{user}</a></div>}
        </section>
        :
        <section className={`rform`}>

            {!openIAgree ? <Agreement/> :
            <form style={{height:'450px'}}>
                <input value={user_name} onChange={e => setUsername(e.target.value)} placeholder="Username" className="log-input log-form-length disabled" style={{marginLeft:'2px'}}/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="log-input log-form-length disabled" style={{marginLeft:'2px',marginTop:'17px',marginBottom:'2px'}} type="password" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="log-input log-form-length disabled" style={{marginLeft:'2px',marginTop:'18px',marginBottom:'2px'}} />
                <input value={first_name} onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="log-input log-form-length disabled" style={{marginLeft:'2px',marginTop:'17px',marginBottom:'2px'}} />
                <input value={last_name} onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="log-input log-form-length disabled" style={{marginLeft:'2px',marginBottom:'20px',marginTop:'17px'}} />
            </form>}
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
                {openIAgree ? <a className="login-button" style={{marginTop:'10px'}} onClick={executeRegister} >Sign Up</a> : null}
                <div className="build-account" ><a style={{fontWeight:'400',color:"blue"}} onClick={selectSignUp}>Cancel</a></div>
                <div className='r-form-fake-bottom' ></div>
            </section>
        }
    </div>

    )
    
}

function mapStateToProps(reduxState){
    return reduxState
}
export default connect(mapStateToProps,{registerUser,loginUser})(MobileLogin)