import styled from "styled-components";

export const BaseButton = styled.button`
    background: linear-gradient(0turn,#5077be,#6495ed);
    color: #fff;
    font-size: 16px;
    height: 35px;
    width: 90px;
    border-radius: 2px;
    border:solid 1px #3c598e;
    margin-left: 2px;
    margin-right: 2px;
    transition: all 500ms;

    &:hover {
        background: linear-gradient(0turn,#3c598e,#5077be);
    }
`