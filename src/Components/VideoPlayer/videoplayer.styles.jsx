import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
    BaseDocHead,
    BaseDocFoot
} from "../../ducks/global.styles";

export const PlayerContainer = styled.section`
    position: relative;
    border-radius: 10px;
    width: 297px;
    height: 350px;
    background-color: #fff;
    margin: 10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display: flex;
    flex-direction: column;
	justify-content: space-between;
	align-items: center;

    @media (max-width:1000px) {
        width: 240px;
        margin-left:0px;
        margin-right:20px;
    }
    
`

export const VideoTitle = styled(BaseDocHead)`
    color: #fff;
    position: absolute;
    text-transform: none;
    height: 60px;
    width: 298px;
    transition: all 100ms;
    margin: 0px;
    display: flex;
    align-items: center;
    z-index:1;
    // background: linear-gradient(0turn,#5077be,#6495ed);

    h5 {
        color:#fff;
        margin:0px;
        width:190px;
        min-height: 10px;
        font-size: 14px;
        position:relative;
        margin: 10px;
        font-weight:40;
    }

    i,
    a {
        text-decoration:none;
        color:#283c5f;
        font-weight:500;
    }

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

export const SmallVideoViewPort = styled.div`
    width:298px;
    height:191px;
    display: none;

    @media (max-width:1000px) {
        display: inline;
        margin: auto;
    }
`

export const LargeVideoViewPort = styled(SmallVideoViewPort)`
    display: inline;
    margin: auto;

    // background-color:pink;

    // iframe {
    //     display:none;
    // }


    @media (max-width:1000px) {
        display:none;
    }
`

export const VideoFooter = styled(BaseDocFoot)`
    height:80px;
    width:100%;
`