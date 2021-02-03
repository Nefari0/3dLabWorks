import { useState, useEffect } from 'react'
import './Register.css'
import { registerUser } from '../../ducks/userReducer'
import {connect} from 'react-redux'

const Register = (props) => {

    const [ user_name, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ first_name, setFirstName] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ photo_url, setPhoto ] = useState('')
    const [ is_admin ] = useState(false)

    useEffect(() => {
        console.log('props from Register',props)
    },[])

    // function handlePhotoInput(params){
    //     setPhoto(params)
    // }

    function executeRegister(){
        props.registerUser(user_name, password, email, first_name, is_admin)
    }

    return(
        <div className="signup-menu">
            <div className="one-line">
                <p className="text">username</p>
                <input value={user_name} className="input" onChange={e => setUserName(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">password</p>
                <input value={password} className="input" onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">email</p>
                <input className="input" value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="one-line">
                <p className="text">first name</p>
                <input className="input" value={first_name} onChange={e => setFirstName(e.target.value)}></input>
            </div>

            <div className="register-link" onClick={executeRegister}>
                <h4>signup now</h4>
            </div>

            
        </div>
    )
}
function mapStateToProps(reduxState){
    return reduxState
}
export default connect(mapStateToProps,{registerUser})(Register)
