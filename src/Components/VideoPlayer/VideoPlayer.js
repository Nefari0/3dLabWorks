import ReactPlayer from 'react-player'
import './VideoPlayer.css'
import { Link } from 'react-router-dom'

const VideoPlayer = (props) => {

    const { video_url,firebase_url,category,tag,photo_url,user_name,name,video_name,id } = props
    
    return(
        <div className='player-container' >
            <header className='video-title' >
                ><img className='video-user-photo' src={photo_url} />
                <div className='vidnm-and-usrnm' > <p className="dark-text video-nm-txt" >{name === 'dummy project' ? video_name : name}</p><p className='usr-nm-txt' style={{marginRight:'60px'}} >Video by {user_name}</p> </div>
            </header>
            <div className='' style={{marginTop:'50px'}} >

                <div className='reg-size' ><ReactPlayer
                className='react-player'
                url={video_url}
                width='298px'
                height='191px'
                /></div>

                <div className='small-size' ><ReactPlayer
                className='react-player'
                url={video_url}
                width='240px'
                height='150px'
                /></div>

            <div className='video-info-container' >
                <header className='video-header' >
                    <p className='video-header-text' >{category}: {tag}</p>
                </header>
            {firebase_url === null ? <p className='video-container-text' >

                There are no files associated with this video

                </p> : <p className='video-container-text' >

                Click <a href={firebase_url} >here</a> to download the files used in this video 

                </p>}
            </div>
            </div>
        </div>
    )
}

export default VideoPlayer