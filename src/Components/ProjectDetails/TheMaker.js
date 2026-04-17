import { MakerContainer } from './TheMaker.styles'
import { Link } from 'react-router-dom'

const TheMaker = (props) => {

    const { info,userInfo } = props
    const { user_name, photo_url } = userInfo
    
    return(
        <MakerContainer>
                <img src={photo_url}  />
                <h4>{info.name}<br style={{paddingBottom:'10px'}}/><Link to={`/viewuser/${userInfo.user_id}`}  >by {user_name}</Link></h4>          
        </MakerContainer>
    )
}

export default TheMaker