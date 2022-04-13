import ReactPlayer from 'react-player'
import './VideoPlayer.css'

const VideoPlayer = (props) => {

    const { video_url,firebase_url,category,tag,photo_url,user_name,name,video_name } = props
    
    return(
        <div className='player-container' >
            {/* <div className='video-row'> */}
            <header className='video-title' >
                <img className='video-user-photo' src={photo_url} />
                {/* <p style={{color:'#555'}} >text</p> */}
                <p className="dark-text">{name === 'dummy project' ? video_name : name}<br/><p className='usr-nm-txt' style={{marginRight:'100px'}} >by {user_name}</p></p>
            </header>
            <div className='' style={{marginTop:'50px'}} >
                {/* <div className='player-wrapper'> */}
                <ReactPlayer
                className='react-player'
                // url='https://vimeo.com/698418589'
                url={video_url}
                // width='350px'
                // height='225px'
                width='298px'
                height='191px'
                />
                {/* </div> */}
            {/* </div>
            <div className='video-column' > */}
            <div className='video-info-container' >
                <header className='video-header' >
                    {/* <h5>tutorial</h5> */}
                    {/* <p className='video-header-text' >Tutorial: use this simple tool to create any cookie cutter shape in just a few minutes</p> */}
                    <p className='video-header-text' >{category}: {tag}</p>
                </header>
                {/* <p className='video-container-text' >

                Click <a href={`https://firebasestorage.googleapis.com/v0/b/depot-7bb3e.appspot.com/o/steammachine%2Fcomputer-fan.stl?alt=media&token=af817a7b-5f9f-40da-b4c3-41579e2aa2ac`} >here</a> to download the files used in this video 

                </p> */}
            {firebase_url === null ? <p className='video-container-text' >

                There are no files associated with this video

                </p> : <p className='video-container-text' >

                Click <a href={firebase_url} >here</a> to download the files used in this video 

                </p>}
            </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default VideoPlayer