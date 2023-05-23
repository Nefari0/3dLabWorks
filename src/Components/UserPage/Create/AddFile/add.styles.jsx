import styled from "styled-components"
import { SelectFile } from "../create.styles"

export const AddFileContainer = styled.div`
    position: absolute;
    height: 80px;
    width: 100%;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
    overflow: none;
`

export const AddFileButton = styled.button`
    margin-bottom: 50px;
    margin-left: 45px;
    height: 25px;
    width: 200px;
    border-radius: 2px;
    font-size: 18px;
    border:solid 1px #3c598e;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InputFile = styled.input`
    position: absolute;
    top: 10px;
    height: 40px;
    width: 300px;
    color: #555;
    z-index: 10000;
    ${SelectFile}
`