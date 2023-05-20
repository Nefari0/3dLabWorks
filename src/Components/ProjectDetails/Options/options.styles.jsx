import styled from "styled-components";

export const OptionsH4 = styled.h4`
    padding-top: 15px;
    padding-bottom: 5px;
    color: ${({viewFiles}) => viewFiles ? '#fff' : '#555'};
    margin-left: 10px;
`

export const OptionsText = styled.p`
    margin:auto;
    margin-left:0px;
    color:${({condition}) => condition ? '#fff' : '#555'};
`