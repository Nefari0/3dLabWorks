import styled, {css} from "styled-components"

export const BaseParagraph = styled.p`
    padding: 10px;
    color: #222; 
    background: #fff;
    text-align: left;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 1em to 1.5em;
    font-family: 'Inter', sans-serif;

    @media (max-width: 650px) {
        // width: 50%;
    }
`

export const screenWidths = {
    largeWidth:1000,
    medWidth:600,
    smallWidth:300
}