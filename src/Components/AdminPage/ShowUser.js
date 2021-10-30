import './AdminPage.css'

const ShowUser = (props) => {

    const { user_name,first_name,last_name } = props

    return(
        <div className="show-user">
            <p className="admin-a">{first_name + ' ' + last_name}</p>
            <p className="admin-a">{user_name}</p>
        </div>
    )
}

export default ShowUser