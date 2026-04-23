import ReactPlayer from 'react-player'
import './VideoPlayer.css'
import { Link } from 'react-router-dom'
import { SITE_OWNER_ID } from '../../ducks/global'
import { 
    PlayerContainer,
    VideoTitle,
    VideoMakerTextLink
 } from './videoplayer.styles'

const VideoPlayer = (props) => {

    const { video_url,firebase_url,category,tag,photo_url,user_name,name,video_name,model_id } = props

    return(
        <PlayerContainer className='player-container' >
            <VideoTitle className='video-title' >
                <Link to={`/viewuser/${SITE_OWNER_ID}`} ><img className='video-user-photo' src={photo_url}/></Link>
                {/* <img className='video-user-photo' src={photo_url} /> */}
                <div>
                    <h4 className="dark-text video-nm-txt" >{name === 'dummy project' ? video_name : name}</h4>
                    <VideoMakerTextLink to={`/viewuser/${SITE_OWNER_ID}`}><i>Video by {user_name}</i></VideoMakerTextLink>
                </div>
            </VideoTitle>
            <div className='' style={{marginTop:'50px'}} >

                <div className='reg-size' >
                    <ReactPlayer
                        className='react-player'
                        url={video_url}
                        width='298px'
                        height='191px'
                        controls={true}
                    />
                </div>

                <div className='small-size' >
                    <ReactPlayer
                        className='react-player'
                        url={video_url}
                        width='240px'
                        height='150px'
                        controls={true}
                    />
                </div>

            <div className='video-info-container' >
                <header className='video-header' >
                    <p className='video-header-text' >{category}: {tag}</p>
                </header>
            {firebase_url === null ? <p className='video-container-text' >

                There are no files associated with this video

                </p> : <p className='video-container-text' >

                <Link to={`/projectdetails/${model_id}`}>view details</Link>

                </p>}
            </div>
            </div>
        </PlayerContainer>
    )
}

export default VideoPlayer