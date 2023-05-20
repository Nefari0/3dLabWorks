import styled from "styled-components";

export const ProjectContainer = styled.section`
    border-radius: 5px;
    margin: 10px;
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
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin: 0px;
        opacity: .8;
    }

    @media (max-height:520px) {
        height: 330px;
    }

    @media (max-width:1000px) {
        width: 240px;
        margin-left:0px;
        margin-right:20px;

        footer {a{
            font-size: 12px;
            font-weight: 400;
        }}

        h5 {font-size: 14px;}
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

export const ProjectContainerFooter = styled.footer`
    border-top:1px solid #555;
    height: 200px;
    display: flex;
    align-items: center;
    // background-color:blue;
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