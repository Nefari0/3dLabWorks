import styled, { css } from "styled-components";

const selected = css`
    // background: linear-gradient(0turn,#3c598e,#5077be);
    // background: linear-gradient(0turn,#5077be,#6495ed);
    background-color:#fff;
`

const BaseButtonCss = css`
    height: 35px;
    width: 200px;
    padding-bottom: 20px;
    // background: linear-gradient(0turn,#3c598e,#5077be);
    // box-shadow: 0px 30px 8px -17px #000000;
    border: solid 1px #3c598e;
    color: #fff;
    ${({condition}) => console.log(condition,'here is condition')}
    ${({condition}) => condition && selected}
    // ${selected}
`
export const BaseButton = styled.button`
    ${BaseButtonCss}
`