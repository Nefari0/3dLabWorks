import { MobileNavContainer } from "./menu.styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { LoginIcon,LogoutIcon } from "../../SVG2";

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
                  
                <li onClick={toggleLogin}>
                    {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
                    {isLoggedIn ? "Logout" : "Login"}
                </li>

                {isMenuOpen === true ? 
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <li >
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <a>About</a>
                    </li>
                </Link> : null}

                {isMenuOpen === true ?
                <Link to="/explore" style={{ textDecoration: 'none' }}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <a>Explore</a>
                    </li>
                </Link> : null}

                {!isLoggedIn === true && isMenuOpen === true ? (<div></div>)
                : 
                (isMenuOpen === true ?
                <Link to="/user" style={{ textDecoration: 'none' }}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="header-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <a>My page</a>
                    </li>
                </Link> : null)}
                
            </ul>
        </MobileNavContainer>
    )
}

export default MobileNav