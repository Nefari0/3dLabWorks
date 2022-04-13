import ReactPlayer from 'react-player'
import './VideoPlayer.css'

const VideoPlayer = (props) => {

    const { video_url,firebase_url,category,tag,photo_url,user_name,name,video_name } = props
    
    return(
        <div className='player-container' >
            <header className='video-title' >
                <img className='video-user-photo' src={photo_url} />
                <p className="dark-text" >{name === 'dummy project' ? video_name : name}<br/><p className='usr-nm-txt' style={{marginRight:'60px'}} >Video by {user_name}</p></p>
            </header>
            <div className='' style={{marginTop:'50px'}} >
                <ReactPlayer
                className='react-player'
                url={video_url}
                width='298px'
                height='191px'
                />
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