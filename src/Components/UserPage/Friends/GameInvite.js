import { useState } from 'react'
import './GameInvite.css'


const GameInvite = (props) => {

    const { isAccepted,photo,gameID } = props.challengeUser.gameInformation

    const [isConfirmed,setIsConfirmed] = useState(false)

    const [openAccept,setOpenAccept] = useState(false)
    // console.log(props)

    const handleAccept= (confirm,val) => {
        // if(isConfirmed === false){
        props.changeGameID(confirm,val)
        setOpenAccept(!openAccept)
        // }
        if(confirm === true) {setIsConfirmed(true)}
    }

    return(<div>
        {openAccept === false ? <div className={`invite`} >
            <img src={photo} className='invite-photo' onClick={() => {
                if(isConfirmed === false){setOpenAccept(!openAccept)} else {props.hideView('showGames')} // once challenge is accepted, photo will be used to open game
                }
            } />
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="game-invite-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> */}
            {/* <div className='choose-accept'><p className='choose-accept-text'>accept</p></div> */}
            
            {isAccepted === false && isConfirmed === false ? <svg xmlns="http://www.w3.org/2000/svg" className="game-invite-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg> : null}
        </div> :
        <div className='invite choose-accept'>
            <div className='game-invite-title' >
                <p className='game-invite-title-text' >Accept Challenge?</p>
            </div>
            <div className='invite-yes-no' ><p className='choose-accept-text' onClick={() => handleAccept(true,gameID)} >yes</p><p className='choose-accept-text' onClick={() => handleAccept(false)} >no</p></div>
        </div>}
    </div>)
}

export default GameInvite