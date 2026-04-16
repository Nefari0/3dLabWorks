import styled from "styled-components";
// import background from './src/assets/white-backround1.jpg'

// background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${background});
export const DetailsView = styled.section`
    margin: none;
    min-height: 90vh;
    min-width: 100vw;
    // min-width:100px;
    background-size: cover; 
    background-position: center bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: right top;

        section {
            margin: auto;
            margin-bottom: 0px;
            margin-top: 0px;
            width: 660px;
            display: flex;
            justify-content: center;
            background-color:pink;

            @media (max-width:680px) {
                width:300px;
            }
    }
`

export const ThumbnailViewer = styled.div`
    min-height:45px;
    width:100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;

    div {
        // min-height:100%;
        height: 50px;
        width:50px;
        overflow:hidden;
        img {
            height: 50px;
            width:auto;
        }
    }

    @media (max-width:680px) {
        width: 100%;
    }
`

export const DetailContainer = styled.section`
    margin: 0px;
    // margin-bottom: 0px;
    // margin-top: 5px;
    // height: 312px;
    width: 660px;
    // width:95%;
    display: flex;
    justify-content: center;
            background-color:yellow;

    section {
        width: 440px;
        min-height: 100px;
        margin: 0px;
        display: flex;

        @media (max-width:680px) {
            width:300px;
        }
    }

    ul {
        // width: 95%;
        width: 220px;
        background-color:purple;

        li {
            background-color: #fff;
            display: flex;
            height: 59px;
            width: 100%;
            border:solid 1px rgb(85, 85, 85,.3) ;
        }
        
        @media (max-width:680px) {
            width:100%;
        }
    }

    @media (max-width:680px) {
        min-height: 200px;
        flex-direction: column;
        width: 300px;
        
        img {
        }
    }
`

export const CommentBox = styled.div`
    margin: auto;
    margin-top: 0px;
    min-height: 300px;
    width: 660px;
    border-radius: .1%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:680px) {
        width:300px;
    }
`

export const CommentBoxHeader = styled.header`
    background-color: #6495ed;
    opacity: .8;
    height: 32px;
    width: 100%;

    @media (max-width:680px) {
        width:300px;
    }
`

export const DescriptionText = styled.p`
    padding: 5px;
    color: #222; 
background: #fff;
    text-align: left;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 1em to 1.5em;
      font-family: 'Inter', sans-serif;

    @media (max-width: 680px) {
        width: 100%;
    }
`