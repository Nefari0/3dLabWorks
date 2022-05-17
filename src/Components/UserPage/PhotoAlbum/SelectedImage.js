import './SelectedPhoto.css'
import { useState } from 'react'
import axios from 'axios'

const SelectedImage = (props) => {

    const { image_url,user_id } = props
    const [menuOpen,setMenuOpen] = useState(false)

    const clickHandler = async (params) => {
        await setMenuOpen(!menuOpen)
        await props.setCurrentImg(null)
       
        switch (params) {
            case 'delete':
                await props.removingPhoto(image_url)
                break;
            case 'update_photo':
                await axios.post('/api/users/update/photo/',{image_url,user_id})
                break;
            case 'update_background_img':
                await axios.post('/api/user/update/background',{image_url,user_id})
                break;
        }
        await props.getPhotos(user_id)
    }

    return(<div className="selected-img">
        {/* <p>X</p> */}

        <svg onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" className='friend-menu-icon' style={{position:'absolute',left:'0px'}}  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen === false ? <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />:
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />}
        </svg>

        {menuOpen === true ? <ul className='friend-options' style={{width:'200px',height:'130px',left:'0px',top:'30px'}}>
            <li className='friend-menu-row' style={{width:'200px'}} onClick={() => clickHandler('update_photo')} >Use as Profile Picture</li>
            <li onClick={() => clickHandler('update_background_img')} className='friend-menu-row' style={{width:'200px'}} >Use as Background</li>
            <li onClick={() => clickHandler('delete')} className='friend-menu-row' style={{width:'200px'}} >Delete Photo</li>
        </ul> : null}

        <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" style={{position:'absolute',right:'0px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => props.setCurrentImg(null)} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <img  src={image_url} />
    </div>)
}

export default SelectedImage


// <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// </svg>