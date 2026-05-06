import styled from "styled-components";

export const LoadingSpinnerOverlay = styled.div`
    min-width:100vw;
    height:100vh;
    position:fixed;
    display:flex;
    z-index:2;
    pointer-events:none;

    @media (max-width:300px) {
        width:300px;
    }
`