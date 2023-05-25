import styled from "styled-components";

export const AboutContainer = styled.main`
    min-height: 100vh;
    width: 100vw;
    // background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(/src/assets/white-backround1.jpg);
    background-image: linear-gradient(120deg,#ffffff 20%,rgba(150, 150, 150, .6));
    background-size: cover; 
    background-position: center bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    section {
        margin: 10px;
        display: flex;
        justify-content: center;

        div {
            min-height: 300px;
        }   
    }
    
    header {
        position:relative;
    }

    @media (max-width: 850px){
        section {flex-direction: column;}
        div {margin:auto;margin-bottom:5px;}
    }

    @media (max-width:325px) {
        div {width: 100%;}
    }
`