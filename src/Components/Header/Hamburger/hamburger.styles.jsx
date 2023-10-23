import styled, {css} from "styled-components";

const userOnline = css`
    position: absolute;
    height: 25px;
    border-radius: 50%;
    color: #fff;
    bottom: 5px;
    right: 0px;
`

export const HamburgersContainer = styled.div`
    width:50px;
    height:50px;
    background-color:yellow;
    display:flex;
    position: absolute;
    // right: 20px;
    right:80px;
    pointer-events:none;

    svg {
            height: 35px;
            background-color:green;
            // display: none;

            ${({isLoggedIn}) => isLoggedIn && userOnline}

        }

    @media (min-width:820px) {
        display:none;
    }
`