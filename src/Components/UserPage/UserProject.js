import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const UserProject = (props) => {

    console.log('props from userproject',props)

    return(
        <div>
            <h4>{props.model_id}</h4>
        </div>
    )
}

export default UserProject