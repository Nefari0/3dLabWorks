import styled from "styled-components";

export const CreateInputBox = styled.div`
    position: relative;
    height: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    img {
        width:80px;
        height:80px;
        border-radius:10px;
        margin-left:35%;
        margin-bottom:0px;
        // background-color:yellow;
    }

    input[type='file']
    {
        text-indent: -999em;
        outline: none;
        position: absolute;
        left: 20%;
        opacity: .1;
        height: 80px;
        width: 80px;
        z-index: 10000;
    }
    `