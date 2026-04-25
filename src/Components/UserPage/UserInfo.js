
import './UserInfo.css'
import { useState } from 'react'
import { 
    UserInfoContainer,
    UserInfoRow,
    UserInfoTitle
 } from './userinfo.styles'

import { BaseParagraph } from '../../ducks/global.styles'

const UserInfo = ({state}) => {
    const [editOpen,setEditOpen ] = useState(false)

    function toggleEdit(){
        setEditOpen(!editOpen)
    }

    return(
        <UserInfoContainer>
            <UserInfoTitle><h2 >More about me</h2></UserInfoTitle>
            {/* <div className="user-info-h2"><p className="user-info-p" >name:</p><h2 className="text-element">{name}</h2></div> */}
            {/* {email != null ? <div className="user-info-h2"><p className="user-info-p">email:</p><h2 className="text-element">{email}</h2></div> : null}   */}
            {/* <div className="user-info-h2"><p className="user-info-p">username:</p><h2 className="text-element" >{user}</h2></div> */}
            <UserInfoRow>
                <BaseParagraph>
                    {state.userBio}
                </BaseParagraph>
            </UserInfoRow>
        </UserInfoContainer>
    )
}

export default UserInfo