import styled, {css} from "styled-components";

const userOnlineIcon = css`

    svg {
        position: absolute;
        height: 25px;
        border-radius: 50%;
        color: #fff;
        bottom: -5px;
        right: 0px;
    }

    img {display:block;}
`

export const HamburgersContainer = styled.div`
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    right: 20px;
    
    img {
        position: absolute;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        z-index: 0;
        border: 1px solid #3c598e;
        box-shadow: 0 4px 3px 0  rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        top: 5px;
        display:none;
    }
    
    svg {
        height: 35px;
        position:relative;
    }

    ${({isLoggedIn}) => isLoggedIn && userOnlineIcon}

    @media (min-width:820px) {
        display:none;
    }

    @media (max-width:400px) {
        -webkit-transform: scale(.75);
        -ms-transform: scale(.75);
        transform: scale(.75);

        right:0px;
    }
`