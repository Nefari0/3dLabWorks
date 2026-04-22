import styled, { keyframes } from "styled-components";

const cubeWidth = 350;
const cubeHeight = 350;

export const CubeContainer = styled.div`
    width: ${cubeWidth}px;
    height: ${cubeHeight}px;
    position: relative;    
    margin: auto;
    top:-100px;
    -webkit-perspective: 1000px;
    -webkit-perspective-origin: 0px -100px;

    @media (max-width:2000px) {
      transform: scale(0.8);
    }
    
    @media (max-width:1070px) {
      transform: scale(0.6);
    }

    @media (max-width:450px) {
      -webkit-perspective: 1600px;
    }

    @media (max-height:520px) {
      transform: scale(0.4);
      top:-50px;
    }
`;

export const Cube = styled.div`
    -webkit-transform-style: preserve-3d;  
    position:relative;
    margin:auto;

    transform: rotateY(${({ rotation }) => rotation}deg);
    transition: all 1000ms;
    width: ${cubeWidth}px;
    height: ${cubeWidth}px;
`;

export const FaceMapItem = styled.figure`
    position: absolute;
    -webkit-transform-style: preserve-3d;
    width:${({ cubeParams }) => cubeParams}px;
    height: ${({ cubeParams }) => cubeParams}px;
    -webkit-transform: rotateY(${({ cubeRotations, i }) => cubeRotations * i + 1}deg) translateZ(${({ cubeParams }) => (cubeParams / 2) * 3.14}px);
    transition: all 1000ms;
    pointer-events: none;
`;

export const ProjectCard = styled.div`
    -webkit-transform-style: preserve-3d;
    position: absolute;
    width: ${({cubeParams}) => cubeParams}px;
    height:400px;
    pointer-events: auto;

    -webkit-transform: rotateY(${({ rotationIters, cubeRotations, i }) => rotationIters}deg) translateZ(${0}px);
    
    transition: all 1000ms;
    
`