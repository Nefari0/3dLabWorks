import styled from "styled-components";
import { Link } from "react-router-dom";

export const PlayerContainer = styled.section`
    position: relative;
    width: 297px;
    height: 350px;
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display: flex;
    flex-direction: column;
	justify-content: space-between;
	align-items: center;
    overflow: hidden;

    a {
        text-decoration:none;
    }

    @media (max-width:1000px) {
        width: 240px;
        margin-left:0px;
        margin-right:20px;
    }
    
`

export const VideoTitle = styled.header`
    color: #fff;
    position: absolute;
    text-transform: none;
    height: 60px;
    width: 298px;
    border-bottom: solid 1px #555;
    transition: all 100ms;
    margin: none;
    display: flex;
    align-items: center;
    align-content: stretch;

    div {
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: baseline;
        align-content: flex-end;
    }

    @media (max-width:1000px) {
        width: 241px;
    }
`

export const VideoMakerTextLink = styled(Link)`
    height:15px;

    i {
        position:relative;
        margin:auto;
        bottom:12px;
    }
`