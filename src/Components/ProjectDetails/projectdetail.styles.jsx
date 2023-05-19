import styled from "styled-components";
// import background from './src/assets/white-backround1.jpg'

// background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${background});
export const DetailsView = styled.section`
    margin: none;
    min-height: 90vh;
    min-width: 100vw;
    background-size: cover; 
    background-position: center bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(120deg,#ffffff 20%,rgba(150, 150, 150, .6));
    background-repeat: no-repeat;
    background-position: right top;
`

export const ThumbnailViewer = styled.section`
    height: 75px;
    width: 645px;
    background-color: #fff;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 4px;
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    border: solid 1px rgb(85, 85, 85,.3);

    @media (max-width:680px) {
        width: 300px;
    }
`

export const DetailContainer = styled.section`
    margin: auto;
    margin-bottom: 0px;
    margin-top: 5px;
    height: 312px;
    width: 660px;
    display: flex;
    justify-content: center;

    section {
        width: 440px;
        min-height: 100px;
        margin: 2px;
        display: flex;

        @media (max-width:680px) {
            width:300px;
        }
    }

    ul {
        width: 220px;

        li {
            background-color: #fff;
            display: flex;
            height: 59px;
            width: 100%;
            margin-left: 2px;
            margin-top: auto;
            margin-bottom: auto;
            border-bottom: solid 1px rgb(85, 85, 85,.3) ;
            border-left:solid 1px rgb(85, 85, 85,.3)  ;
            border-right:solid 1px rgb(85, 85, 85,.3) ;
        }
    }

    @media (max-width:680px) {
        min-height: 500px;
        flex-direction: column;
        align-items: center;
        width: 300px;
        
        img {
        }
    }
`

export const CommentBox = styled.section`
    margin: auto;
    margin-top: 10px;
    min-height: 300px;
    width: 645px;
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
    padding: 10px;
    padding-left: 25px;
    margin: 15px;
    min-height: 30px;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px #d1d1d1;
    color: #555;
    text-align: left;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        width: 300px;
    }
`