import { MakerContainer } from './TheMaker.styles'

const TheMaker = (props) => {

    const { info,userInfo } = props
    const { user_name, photo_url } = userInfo
    
    return(
        <MakerContainer>
                <img src={photo_url}  />
                <h4>{info.name}<br style={{paddingBottom:'10px'}}/><i  >by {user_name}</i></h4>          
        </MakerContainer>
    )
}

export default TheMaker