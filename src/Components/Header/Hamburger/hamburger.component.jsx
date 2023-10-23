import { BurgerIcon } from "../../SVG2";
import { HamburgersContainer } from "./hamburger.styles";

const Hamburgers = ({photo,isLoggedIn,...props}) => {
    return (
        <HamburgersContainer isLoggedIn={isLoggedIn}{...props}>
            <img src={photo}/>
            <BurgerIcon />
        </HamburgersContainer>
    )
}

export default Hamburgers