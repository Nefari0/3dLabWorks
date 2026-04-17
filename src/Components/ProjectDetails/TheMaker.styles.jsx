import styled from "styled-components"

export const MakerContainer = styled.div`
    height: 70px;
    width: 680px;
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
        with:auto;
        border-radius: 50%;
        margin:10px;
    }

    @media (max-width:680px) {
        width: 100%;
`