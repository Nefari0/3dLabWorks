import styled from "styled-components";

export const SubHeader = styled.header`
    position: absolute;
    margin-top: 2px;
    height: 30px;
    width: 100vw;
    background: linear-gradient(0turn,#5077be,#6495ed);
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    @media (max-width:300px) {
        min-width: 300px;
    }
`

export const TextLink = styled.button`
    background-color:blue;
`