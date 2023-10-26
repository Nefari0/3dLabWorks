import styled from "styled-components";

export const AlertContainer = styled.div`
    width:300px;
    height:200px;
    background-color:#fff;
    display:flex;   
    flex-direction:column;
    align-items:center;

    p {
        color:black;
    }
`
export const AlertOverlay = styled.section`
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,.2);
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;

    z-index:1;
`