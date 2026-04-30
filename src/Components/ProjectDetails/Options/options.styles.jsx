import styled from "styled-components";
// import { BaseButton } from "../../../ducks/global.styles";
// import baseButt

export const TheListContainer = styled.section`
    width: 220px;

    li {
        background-color: #fff;
        display: flex;
        height: 59px;
        width: 100%;
        border:solid 1px rgb(85, 85, 85,.3) ;
    }

    button {
        width:100%;
    }
    
    @media (max-width:680px) {
        width:100%;
    }
    

    @media (max-width:680px) {
        min-height: 200px;
        flex-direction: column;
    }

`

// export const OptionsButton = styled(BaseButton)`
//     height:58px;
//     min-width:10%;
// `

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