import { BurgerIcon } from "../../SVG2";
import { HamburgersContainer } from "./hamburger.styles";

const Hamburgers = ({photo,isLoggedIn}) => {
    return (
        <HamburgersContainer isLoggedIn={isLoggedIn}>
            <BurgerIcon />
        </HamburgersContainer>
    )
}

export default Hamburgers