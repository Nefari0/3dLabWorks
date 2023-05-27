import { Link } from 'react-router-dom'
import Button from '../../GlobalStyles/BaseButton/button.component'
import { 
    DesktopNav 
} from './header.styles'

const DesktopNavComponent = (props) => {

    const {
        user,
        isLoggedIn,
        toggleLogin,
    } = props

    return (
    <DesktopNav>
        <Link to="/about" style={{ textDecoration: 'none' }}><p>About</p></Link>
        <Link to="/explore" style={{ textDecoration: 'none' }}><p>Explore</p></Link>
        {isLoggedIn && (<Link to="/user" style={{ textDecoration: 'none' }}><p>{user}</p></Link>)}

        <Button 
            onClick={toggleLogin}
            text={!isLoggedIn ? 'Login' : 'logout'}
        />
    </DesktopNav>
    )
}

export default DesktopNavComponent