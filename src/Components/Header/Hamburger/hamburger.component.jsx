import { Hamburger } from "../../SVG2";
import { HamburgerContainer } from "./hamburger.styles";

// const SVGStyling = {
//     height:'25px',
//     width:'25px',
//     marginRight:'10px'
// }

const HamburgerComponent = (props) => {

    const {
        isLoggedIn,
        toggleMenu
    } = props

    return (
        <HamburgerContainer isLoggedIn>
            <Hamburger onClick={toggleMenu}/>
        </HamburgerContainer>
    )
}

export default HamburgerComponent