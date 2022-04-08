import './../AdminPage.css'
import { Link } from 'react-router-dom'

const UserAdminMessage = (props) => {

    const { messagecontent,email } = props

    return(
        // <Link to={`/messages/${user_id}`}><div className="show-user">
        <div className="show-user">
            {/* <p className="admin-a">{first_name + ' ' + last_name}</p> */}
            <p>email{email}</p><p className="admin-a">{messagecontent}</p>
        </div>
    )
}

export default UserAdminMessage