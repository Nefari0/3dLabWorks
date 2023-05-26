import styled, { css } from "styled-components";

export const baseButtonBackground = css`
    background: linear-gradient(0turn,#5077be,#6495ed);
   
`

export const invertedButtonBackground = css`
    background: linear-gradient(0turn,#3c598e,#5077be);
`

export const baseButtonStyle = css`
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
    ${baseButtonBackground}
    ${baseButtonStyle}
    ${({selected}) => selected && invertedButtonBackground}
    &:hover {${invertedButtonBackground};}

    p {
        opacity:.8;
        font-weight:200;
    }
`

export const InvertedButton = styled.button`
    ${invertedButtonBackground}

    ${({selected}) => selected && baseButtonBackground}
`

export const Tiny = styled.button`
    ${baseButtonStyle}
    ${invertedButtonBackground}
    width:100px;
    height:20px;
    
    &:hover {
        ${baseButtonBackground}
    }

    ${({selected}) => selected && baseButtonBackground}
`