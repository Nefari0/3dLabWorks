import { useState, useEffect } from 'react'
import './Register.css'
import { registerUser } from '../../ducks/userReducer'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Agreement from './Agreement'

const Register = (props) => {

    const [ user_name, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ first_name, setFirstName] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ photo_url, setPhoto ] = useState('')
    const [ is_admin ] = useState(false)
    const [ iAgree, setIAgree ] = useState(false)
    const [ openIAgree, setOpenIAgree ] = useState(false)
    

    useEffect(() => {
        console.log('props from Register',props)
    },[])

    // function handlePhotoInput(params){
    //     setPhoto(params)
    // }

    function plsAgree() {
        alert('please agree to conditions')
    }

    function handleOpenIAgree() {
        setOpenIAgree(!openIAgree)
    }

    function executeRegister(){
        props.registerUser(user_name, password, email, first_name, is_admin)
    }

    return(
        <div className="signup-menu">

            {!openIAgree ? <div><h2 style={{color:'#555'}}>Register</h2>
            <div className="one-line">
                <p className="text">Username</p>
                <input value={user_name}  onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">Password</p>
                <input className="text-bar" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">Email</p>
                <input  value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">First Name</p>
                <input value={first_name} onChange={e => setFirstName(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">Last Name</p>
                <input value={first_name} onChange={e => setFirstName(e.target.value)}></input>
            </div>

            <div className="agreement-check">
                <input type="checkbox" style={{marginRight:'20px',marginTop:'5px'}} onChange={e => setIAgree(!iAgree)}/>
                
                <h5 style={{color:'blue',fontWeight:'200'}} onClick={handleOpenIAgree}>terms of use</h5>
                {/* {!openIAgree ? (<Agreement/>) : (null)} */}
                {/* <Link to={'/agreement'}><h5 style={{color:'blue'}}>terms of use</h5></Link> */}
            </div>
            

            { iAgree ? <div className="register-link" onClick={executeRegister}>
                <h4>signup now</h4>
            </div>
            :
            <div className="register-link" onClick={plsAgree}>
                <h4>signup now</h4>
            </div>}</div> : <Agreement handleOpenIAgree={handleOpenIAgree} />}

        </div>
    )
}
function mapStateToProps(reduxState){
    return reduxState
}
export default connect(mapStateToProps,{registerUser})(Register)
