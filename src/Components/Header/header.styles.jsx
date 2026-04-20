import styled from "styled-components";

const tinyWidth = 325 // px

export const HeaderContainer = styled.header`
    position: relative;
    margin: none;
    height: 60px;
    min-width: 300px;
    background: linear-gradient(0deg,#5077be,#6495ed);
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`

export const PortFolioLink = styled.a`
    position:relative;
    margin:none;
    width:100px;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const LargeCDLimage = styled.img`    
    position: relative;
    height: 50px;
    @media (max-width:${tinyWidth}px) {display: none;}
    @media (max-width:400px) {}
`
export const SmallCDLimage = styled.img`    
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #2D0E94;
    box-shadow: 0 4px 3px 0  rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    display:none;
    
    @media (max-width:${tinyWidth}px) {display:block;}
`

export const MM3dImage = styled.img`
    position: relative;
    height: 50px;
    width: 228px;
    margin-top: 8px;

    @media (max-width:485px) {
        left: -20px;  
        -webkit-transform: scale(.75);
        -ms-transform: scale(.75);
        transform: scale(.75);
    }
    @media (max-width:${tinyWidth}px) {
        left:-40px;
    }
`