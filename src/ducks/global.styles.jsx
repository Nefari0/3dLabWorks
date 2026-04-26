import styled, {css} from "styled-components"

export const theme = {
    colors:{
        colorTier_1:'#6495ed',
        colorTier_2:'#5a86d5',
        colorTier_3:'#5077be',
        colorTier_4:'#4668a6',
        colorTier_5:'#3c598e',
        colorTier_6:'#324b77',
        colorTier_7:'#283c5f',
        colorTier_8:'#1e2d47',
        colorTier_9:'#141e2f',
        colorTier_10:'#0a0f18'
}
}

// export const colors={
//     colorTier_1:'#6495ed',
//     colorTier_2:'#5a86d5',
//     colorTier_3:'#5077be',
//     colorTier_4:'#4668a6',
//     colorTier_5:'#3c598e',
//     colorTier_6:'#324b77',
//     colorTier_7:'#283c5f',
//     colorTier_8:'#1e2d47',
//     colorTier_9:'#141e2f',
//     colorTier_10:'#0a0f18'
// }

export const screenWidths = {
    largeWidth:1000,
    medWidth:600,
    smallWidth:300
}

export const BaseParagraph = styled.p`
    padding: 10px;
    color: #222; 
    background: #fff;
    text-align: left;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 1em to 1.5em;
    font-family: 'Inter', sans-serif;

    @media (max-width: 650px) {
        // width: 50%;
    }
`

export const BaseDocHead = styled.header`
    position: relative;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(0turn,#5077be,#6495ed);
`

export const BaseDocFoot = styled.footer`
    background:none;
    border-radius: 0 0 10px 10px;
    border-bottom: 16px solid #6495ed;
`