import styled from 'styled-components'

export const GameTable = styled.main`
    height: 450px;
    width: 390px;
    border-radius: 3%;
    background-color: #fff;
    color: #555;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    top: 5vh;
    position: fixed;
    z-index:1;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    margin: none;
    overflow:hidden;

    @media(max-width:400px) {
        width:100%;
    }
`