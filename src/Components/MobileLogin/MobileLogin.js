import { useState, useEffect } from 'react'
import './MobileLogin.css'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../ducks/userReducer'
import { Link } from 'react-router-dom'

const MobileLogin = (props) => {

    const { user_name, setUsername } = useState('')
    const { password, setPassword } = useState('')
    // const { registerMenu, setRegisterMenu } = useState(false)

    // function handleUserName(value){
    //     setUsername(value)
    // }

    // function handlePassword(value){
    //     setPassword(value)
    // }

    // handleClick() {
    //     // const { user_name, password } = this.state
    //     this.props.loginUser(user_name,password)
    //     this.setState({user_name:'',password:''})
    // }

    // function openRegister(){
    //     setRegisterMenu(true)
    // }

    return(
        // <div className={`login-container ${props.openLogin ? true: 'login-container-hide'}`}>
        <div className={`login-container`}>
            {console.log(props)}
        <p>username</p><input value={user_name} onChange={e => props.name(e.target.value)} className="input-element"/>
        <p>password</p><input value={password} onChange={e => props.pass(e.target.value)} className="input-element"/>
        <button onClick={props.execute} className="non-link-button">login</button>
        <Link to="/register" style={{ textDecoration: 'none' }}><button onClick={props.exit}>register</button></Link>
        <button onClick={props.logout} className="non-link-button">logout</button>
    </div>
    )
}

export default MobileLogin