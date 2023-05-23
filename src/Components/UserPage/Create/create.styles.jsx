import styled, {css} from "styled-components";

export const CreateContainer = styled.section`

    height: 450px;
    width: 300px;
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
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
    position: fixed;
    z-index:10;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    margin: none;
    overflow: hidden;
`

export const CreateHead = styled.header`
    color: #fff;
    position: absolute;
    text-transform: none;
    top: -1px;
    height: 80px;
    width: 100%;
    background: linear-gradient(0turn,#5077be,#6495ed);
    padding-top: 10%;
    margin: none;
    transition: all 100ms;

    h2 {text-transform:none;}
`

export const CreateForm = styled.form`
    position: absolute;
    height: 300px;
    width: 100%;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    transition: all 100ms;
`

export const CreateRow = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`

export const CreateSectionTitle = styled.header`
    opacity: .5;
    height: 20px;
    width: 100%;
    border-top: solid 1px #6495ed;
    margin-top: 10px;
    text-align: left;
    margin-left: 5px;
    font-size: x-small;
    font-weight: 600;
`

export const SelectFile = css`
    opacity: .01;
    left: 5px;
    bottom: 5px;
    width: 150%;
    height: 27%;
    z-index: 1;
`