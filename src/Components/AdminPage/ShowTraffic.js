import './AdminPage.css'

const ShowTraffic = (props) => {

    const { unique_id,remount,date_created } = props

    return(<div className='traffic-display-unit' >
        <p className='traffic-text' >{date_created}</p><p className='traffic-text' >{unique_id}</p><p className='traffic-text' >{remount}</p>
    </div>)
}

export default ShowTraffic