import { useState, useEffect } from 'react'
import './MobileLogin.css'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../ducks/userReducer'
import { Link } from 'react-router-dom'

const MobileLogin = (props) => {

    const { user_name, setUsername } = useState('')
    const { password, setPassword } = useState('')

    return(
        <div className={`login-container`}>
            {console.log(props)}
        <p>username</p><input value={user_name} onChange={e => props.name(e.target.value)} className="input-element"/>
        <p>password</p><input value={password} onChange={e => props.pass(e.target.value)} className="input-element"/>
        <button onClick={props.execute} className="non-link-button">login</button>
        <Link to="/register" style={{ textDecoration: 'none' }}><button onClick={props.exit}>register</button></Link>
        <Link to="/" style={{textDecoration: "none"}}><button onClick={props.logout} className="non-link-button">logout</button></Link>
    </div>
    )
}

export default MobileLogin