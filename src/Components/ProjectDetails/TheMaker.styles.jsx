import styled from "styled-components"

export const MakerContainer = styled.div`
    position:relative;
    height: 70px;
    width:100%;
    background-color: #fff;
    display: flex;
    align-items: center;

    h4 {
        width:100%;
        font-size:12px;
    }

    a{
        font-style: italic;
        text-decoration:none;
        font-size:10px;
    }
    
    img {
        height: 95%;
        width:auto;
        border-radius: 50%;
        margin:10px;
    }

    width: 660px;


    @media (max-width:680px) {
        margin:0;
        width:100%;
    }
`