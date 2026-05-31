import { MobileNavContainer } from "./menu.styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { 
    LoginIcon,
    LogoutIcon,
    InformationIcon,
    CubeIcon,
    IDIcon
} from "../../SVG2";

const MobileNav = (props) => {

    const {
        isLoggedIn,
        isMenuOpen,
        toggleLogin,
        toggleMenu
    } = props

    return (
        <MobileNavContainer
            isMenuOpen={isMenuOpen}
            isLoggedIn={isLoggedIn}
        >
            <ul style={{paddingTop:'10px'}} onClick={() => toggleMenu()} >
                {/* TEMPORARILY REMOVED UNTIL USER FEATURES HAVE BEEN RESTORED */}
                {/* <li onClick={toggleLogin}>
                    {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
                    {isLoggedIn ? "Logout" : "Login"}
                </li> */}

                <Link to="/explore">
                    <li>
                        <CubeIcon />
                        Explore
                    </li>
                </Link>

                <Link to="/about">
                    <li >
                        <InformationIcon />
                        About
                    </li>
                </Link>

                {isLoggedIn && 
                <Link to="/user">
                    <li>
                        <IDIcon />
                        My page
                    </li>
                </Link>
                }
                
            </ul>
        </MobileNavContainer>
    )
}

export default MobileNav