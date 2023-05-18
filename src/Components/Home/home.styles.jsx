import styled, { css } from "styled-components";
import BlenderImage from './blender_background.png'

export const Hero = styled.section`
    position:relative;
    height: 90vh;
    width: 100vw;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${BlenderImage});
    background-size: cover; 
    background-position: center bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-items: baseline;
    // overflow-x: scroll;
    overflow:hidden;
    border-bottom: solid 20px #6495ed;

    @media (max-width:300px) {
        min-width: 300px;
    }

    @media (min-height:700px) {
        height: 92vh;
    }

    @media (min-height:850px) {
        height: 94vh;   
    }
`

export const HeroH2 = styled.h2`
    width: 100vw;

    @media (max-width:400px) {display:none;}
    @media (max-height:525px) {display:none;}
`

export const CarouselRail = styled.section`
    position:relative;
    height: 70vh;
    width: 100vw;
    // display: flex;
    // align-items: center;
    overflow: none;
    z-index: 0;
    margin-left:10px;

    @media (max-width:350px) {
        width:240px;
        height:370px;
        overflow:hidden;
        margin:auto;
    }
`

export const Carousel = styled.section`
    position:absolute;
    min-width:100vw;
    height:100%;
    // background-color:green;
    display:flex;
    flex-direction:row;
    align-items:center;
    left:${({positionCounter}) => positionCounter}px;
    transition:all 1000ms;
`

const button = css`
    border-radius:50%;
    position:absolute;
    z-index:1000000000000000000000;
    // top:80%;
    border:solid #fff 1px;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, .7);
    height:50px;
    width:50px;
`

export const LeftSlideButton = styled.button`
    ${button}
    left:3px;
`

export const RightSlideButton = styled.button`
    ${button}
    right:3px;
    `