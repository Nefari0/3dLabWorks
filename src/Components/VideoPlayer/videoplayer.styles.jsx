import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
    BaseDocHead,
    BaseDocFoot
} from "../../ducks/global.styles";

export const PlayerContainer = styled.section`
    border-radius: 10px;
    width: 297px;
    height: 350px;
    background-color: #fff;
    margin: 10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display: flex;
    flex-direction: column;
	justify-content: space-between;
    overflow:hidden;

    @media (max-width:1000px) {
        width: 240px;
        margin-left:0px;
        margin-right:20px;
    }
    
`

export const VideoTitle = styled(BaseDocHead)`
    min-height: 60px;
    width: 298px;
    min-width: 0;
    display: flex;
    align-items: center;
    text-align: left;

    h5 {
        color:#fff;
        margin:0px;
        width:190px;
        min-height: 10px;
        font-size: 14px;
        position:relative;
        font-weight:400;
    }

    a {
        text-decoration:none;
    }

    @media (max-width:1000px) {
        width: 241px;
    }
`

export const VideoMakerTextLink = styled(Link)`
    height:15px;

    i {
        color:#283c5f;
        position:relative;
        margin:0px;
    }
`

export const VideoUserPhoto = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 10px;
`

export const SmallVideoViewPort = styled.div`
    width:100%;
    min-height:0px;
    display: none;

    iframe {
        margin-top:-8px;
    }

    @media (max-width:1000px) {
        display: inline;
    }
`

export const LargeVideoViewPort = styled(SmallVideoViewPort)`
    display: inline;
    width:100%;
    min-height:0px;
    margin-left:-1px;

    iframe {
        margin-top:-12px;
    }

    @media (max-width:1000px) {
        display:none;
    }
`

export const VideoFooter = styled(BaseDocFoot)`
    height:80px;
    width:100%;
`