import { BurgerIcon } from "../../SVG2";
import { HamburgersContainer } from "./hamburger.styles";

const Hamburgers = ({photo,isLoggedIn,...props}) => {
    return (
        <HamburgersContainer isLoggedIn={isLoggedIn}{...props}>
            <img src={photo ? photo : 'https://firebasestorage.googleapis.com/v0/b/depot-7bb3e.appspot.com/o/Chris%20deMontigny%2Fphotos%2Fprofile-pic-placeholder.JPEG?alt=media&token=0f93dc94-dd77-4072-82bd-925a3b19acf3'}/>
            <BurgerIcon />
        </HamburgersContainer>
    )
}

export default Hamburgers