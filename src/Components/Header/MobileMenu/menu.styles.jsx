import styled, { css } from "styled-components";

const width = 125

const close = css`
    height:0px;
    width:0px;
    transition: all 500ms;
    
    ul {
        display:none;
    }
`

export const MobileNavContainer = styled.nav`

        
    @media (min-width:820px) {
        display:none;
    }

    border-radius: 5px;
    list-style-type: none;
    background-color: #6495ed;
    box-shadow: 0px 5px 20px -7px #000000;
    border: solid 1px #3c598e;
    margin-top: 60px;
    margin-right: 40px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-items: baseline;
    overflow: hidden;
    z-index: 15;
    width:${width}px;
    height:${({isLoggedIn}) => isLoggedIn ? '150' : '110'}px;
    transition: all 500ms;

    ul {
        width:250px;
    }
    
    li {
        text-align:left;
        color:#fff;
        margin-left:5px;
        display:flex;
    }

    svg {
        height: 25px;
        width: 25px;
        padding:0px;
        margin-top:2px;
        margin-right:10px;
    }

    ${({isMenuOpen}) => !isMenuOpen && close}
`