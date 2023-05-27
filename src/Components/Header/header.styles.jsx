import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    margin: none;
    height: 60px;
    min-width: 300px;
    background: linear-gradient(0deg,#5077be,#6495ed);
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`
export const DesktopNav = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    a {
        margin-right: 30px;
        color: #3c598e;
        font-weight: 400;
    }

    @media (max-width:820px) {
        a,
        button {display:none;}
    }
`