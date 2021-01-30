import { useState, useEffect } from 'react'
import './Register.css'
import { registerUser } from '../../ducks/userReducer'

const Register = (props) => {

    const [ user_name, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ first_name, setFirstName] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ photo_url, setPhoto ] = useState('')

    useEffect(() => {
        console.log('props from Register',props)
    },[])

    function handleNameInput(params){
        setUserName(params)
    }

    function handlePassInput(params){
        setPassword(params)
    }

    function handleEmailInput(params){
        setEmail(params)
    }

    function handlefirstNameInput(params){
        setFirstName(params)
    }

    function handlePhotoInput(params){
        setPhoto(params)
    }

    function executeRegister(user_name, password, email, first_name, last_name, photo_url){
        registerUser(user_name, password, email, first_name, last_name, photo_url)
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

export default Register
