import './AdminPage.css'
import { Link } from 'react-router-dom'

const ShowUser = (props) => {

    const { user_name,first_name,last_name,user_id } = props

    return(
        <Link to={`/messages/${user_id}`}><div className="show-user">
            <p className="admin-a">{first_name + ' ' + last_name}</p>
            <p className="admin-a">{user_name}</p>
        </div></Link>
    )
}

export default ShowUser