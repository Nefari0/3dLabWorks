import styled from "styled-components";

export const ImagePreviewContainer = styled.section`
    position: fixed;
    top: 100px;
    height: 350px;
    width: 400px;
    z-index: 1000;

    @media(max-width:700px){
        width: 298px;

        img {
            width: 100%;
            box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
        }
    }
`

export const EditFileButton = styled.button`
    position: absolute;
    background: linear-gradient(0turn,#5077be,#6495ed);
    height: 50px;
    width: 200px;
    border-radius: 2px;
    font-size: 14px;
    border:solid 1px #3c598e;
    z-index: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    color: #fff;

    @media (max-width:700px) {
        height: 25px;
        width: 80px;
        
`