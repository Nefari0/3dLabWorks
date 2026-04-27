import styled, { css } from "styled-components";

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

export const UserInfoContainer = styled.section`
    min-height: 100px;
    // width: ${largeWidth}px;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: start;
	align-items: stretch;
    align-content: center;
    border-radius: 2px;
    margin:auto; 

    `
    // ${containerWidthQuery1}
    // ${containerWidthQuery2}

export const UserInfoTitle = styled.div`
    background: linear-gradient(0turn,#5077be,#6495ed);

    h2 {
        margin-left: 5px;
        font-size: medium;
        color: #fff;
        text-transform: none;
        font-weight: 600;
        text-align:center;
    }
`

export const UserInfoRow = styled.div`
    margin-top: 5px;
    text-align: right;
    color: #555;
    background-color: rgb(253, 249, 249);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding:10px;
    text-align:left;
`
    // ${containerWidthQuery1}
    // ${containerWidthQuery2}