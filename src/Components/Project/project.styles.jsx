import styled from "styled-components";
import { 
    BaseDocHead,
    BaseDocFoot 
} from "../../ducks/global.styles";

// background: ${({ theme }) => theme.colors.primary};
export const ProjectContainer = styled.div`
    border-radius: 10px;
    margin: 10px;
    margin-left:15px;
    height: 350px;
    width: 280px;
    box-shadow: 0px 5px 20px -7px #000000;
    background-color: #fff;
    text-align: left;
    display: flex;
	flex-direction: column;
    justify-content: space-between;
    overflow:hidden;

    header {
        // display: flex;
        // align-items: center;
        // margin-top: 5px;
        // margin: 0px;
        // opacity: .8;
    }

    @media (max-height:520px) {height: 330px;}

    @media (max-width:650px) {
        width: 290px;
        margin-left:10px;
    }

    // @media (max-width:530px) {
    //     width
    // }
`

export const ProjectHeader = styled(BaseDocHead)`
    min-height: 60px;
    width: 298px;
    min-width: 0;
    display: flex;
    align-items: center;

    h5 {
        color:#fff;
        margin:0px;
        width:190px;
        min-height: 10px;
        font-size: 14px;
        position:relative;
        margin: 0;
        font-weight:400;
    }
    
    i {
        margin:auto;
        position:relative;
        color:#283c5f;
        // color:#0a0f18;
        font-weight:500;
    }
`

export const ProjectUserPhoto = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 10px;
`

export const ProjectImageContainer = styled.section`
    background-color: #000;
    overflow: hidden;
    margin-bottom: auto;
    max-height: 160px;

    img {
        opacity: 0.7;
        width: 280px;
        max-height: 188px;
        -webkit-transform: scale(2.15);
        -ms-transform: scale(2.15);
        transform: scale(1.15);
        -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
        transition: transform 0.5s, opacity 0.5s;
        overflow: hidden;

        &:hover {
            opacity: 1;
            -webkit-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
        }
    }

`

export const ProjectContainerBottom = styled.section`
    border-top:1px solid #555;
    height: 200px;
    display: flex;
    align-items: center;
`

export const LikeShareContainer = styled.div`
    margin-right: 15px;
    padding-right: 1px;

    aside {
        border-left:1px solid #555555;
        height: 40px;
        width: 131px;
        margin: none;
        display: flex;
        align-items: center;
        color: #555;
        font-size: 15px;

        svg {
            margin-left: 10px;
            margin-bottom: 7px;
        }
    }

    @media (max-width:1000px) {
        margin-right: 15px;
        padding-right: 1px;
    }
`

export const ProjectFooter = styled(BaseDocFoot)`
    height:60px;
    width:100%;
`