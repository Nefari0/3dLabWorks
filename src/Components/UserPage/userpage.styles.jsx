import styled, {css} from "styled-components";

import { screenWidths } from "../../ducks/global.styles";

const {
    largeWidth,
    medWidth,
    smallWidth
} = screenWidths

const containerWidthQuery1 = css`
    @media(max-width:1100px) {
        width:${medWidth}px;
    }
`

const containerWidthQuery2 = css`
    @media (max-width:650px) {
        width:${smallWidth}px;
    }
`

export const UserPageContainer = styled.section`
    // position:relative;
    min-height: 87vh;
    /* min-width: 300px; */
    min-width:100vw;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(white-backround1.jpg);
    background-size: cover; 
    background-position: center bottom;
    display: flex;
    flex-direction:column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: center;

    ${containerWidthQuery1}
    ${containerWidthQuery2}
`

export const UserRow1 = styled.section`
    position: relative;
    // width: 300px;
    width:${largeWidth}px;
    min-height: 400px;
    float: left;
    overflow-y:auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin:auto;
        overflow: visible;

    ${containerWidthQuery1}
    ${containerWidthQuery2}
    `

export const Portrait = styled.div`
    // position:absolute;
    height: 200px;
    width: 100%;
    color: black;
    // border-radius: 5px;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
    overflow-y: none;
    box-shadow: 0 0 25px rgba(0, 0,  0, 0.1);
            background-color: rgb(253, 249, 249);
    // background-color: #fff;
`

export const BackgroundPhoto = styled.img`
    width:100%;
    // margin-top:0px;
`

export const ProfilePhoto = styled.img`
    position: relative;
    top: -50px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border:solid 8px #fff;
    text-align: center;

    @media (max-width:650px) {
        width:100px;
        height:100px;
    }
`

export const PortraitTextContainer = styled.div`
    position: relative;
    top: -50px;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
`

export const UserRow2 = styled.section`
    position:relative;
    border-radius: 5px;
    min-height: 70vh;
    width: ${largeWidth}px;
    float: left;
    overflow-y:auto;
    display: flex;
    flex-direction: row;
    
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgb(253, 249, 249);
    // background-color: #6495ed;

    ${containerWidthQuery1}
    ${containerWidthQuery2}
`

export const Collections = styled.section`
    min-height: 100px;
    width:${largeWidth}px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y:auto;
    // background-color:blue;

    // @media(max-width:1100px) {
    width:100%;
    }
    `
    // ${containerWidthQuery1}
    // ${containerWidthQuery2}