import styled, { css } from "styled-components";

const baseBackground = css`
    background: linear-gradient(0turn,#5077be,#6495ed);
   
`

const invertedBackground = css`
    background: linear-gradient(0turn,#3c598e,#5077be);
`

const baseButtonStyle = css`
    height: 35px;
    width: 90px;
    border-radius: 2px;
    border:solid 1px #3c598e;
    margin-left: 2px;
    margin-right: 2px;
    transition: all 500ms;
    margin-top:10px;
    color: #fff;
`

export const BaseButton = styled.button`
    ${baseBackground}
    ${baseButtonStyle}
    ${({selected}) => selected && invertedBackground}
    &:hover {${invertedBackground};}

    p {
        opacity:.8;
        font-weight:200;
    }
`

export const InvertedButton = styled.button`
    ${invertedBackground}

    ${({selected}) => selected && baseBackground}
`

export const Tiny = styled.button`
    ${baseButtonStyle}
    ${invertedBackground}
    width:100px;
    height:20px;
    
    &:hover {
        ${baseBackground}
    }

    ${({selected}) => selected && baseBackground}
`