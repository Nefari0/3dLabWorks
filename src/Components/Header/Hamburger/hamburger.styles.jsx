import styled, { css } from "styled-components";

const loggedOutHamburger = css`

    position: absolute;
    right: 20px;
    height: 35px;
    width:35px;
`

const loggedInHamburger = css`
    position: absolute;
    height: 25px;
    border-radius: 50%;
    color: #fff;
    bottom: 5px;
    right: 20px;
`

export const HamburgerContainer = styled.div`
    svg {
        ${({isLoggedIn}) => isLoggedIn ? loggedInHamburger : loggedOutHamburger}
        display:none;

        @media (max-width:820px) {
            display:inline;
        }
    }

`