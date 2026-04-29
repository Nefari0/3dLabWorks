import styled from "styled-components";

const photoContainerHeight = 295
const photoContainerWidth = 440

export const MainPhotoContainer = styled.section`
    width:${photoContainerWidth}px;
    position:relative;
`

export const PhotoMenu = styled.div`
    position: absolute;
    height: 90px;
    width: 150px;
    right: 0px;
    top: 50px;
    border-radius: 5px;
    background-color: #6495ed;
    z-index: 1;
    text-align: left;
`

export const PhotoMenuRow = styled.div`
    height: 40px;
    width: 250px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    p {font-size:16px;}
`

export const MainImage = styled.img`
    width:100%;
    margin:0px;
    min-height:${photoContainerHeight-10}px;

    
    
    @media (max-width:680px) {
        left:0px;
        min-height:auto;
    }
`