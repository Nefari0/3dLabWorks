import styled from "styled-components";

export const CommentContainer = styled.div`
    position: relative;
    height: 120px;
    width: 90%;
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    border-bottom: solid 1px #95b3ec;
`

export const AuthorPic = styled.img`
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
    margin-left: 10px;
    border-radius: 5px;
`

export const RightColumn = styled.section`
    width: 500px;
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    overflow: scroll;
`

export const CommentTextContainer = styled.div`
    height: 85%;
    width: 100%;
    text-align: left;
    color: #555;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1px;
    line-height: calc(1ex / 0.32);
    text-shadow:0 0 0 #000, 0 0 1px transparent;
`