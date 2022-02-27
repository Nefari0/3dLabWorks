import './AdminPage.css'

const ShowTraffic = (props) => {

    const { unique_id,remount,date_created,id,last_visit } = props
    // const { item,content,loggedInUser,user_id,photo_url,date_created } = props

    // var months = [ "January","February","March","April","May","June","July","August","September","October","November","December"];
    // if (last_visit != null){
    //     const time = last_visit.split("T")
    //     return time
    // }
        
    // find date
    // const dateVal = time[0].split('-')
    // find time
    // find am or pm
    // const amPm = (input) => {
        // if(input[0] > 12){
            // return input[0]-12 + ':' + input[1] + ' pm'
        // } else {return(input[0] + ':' + input[1] + ' am')}
    // }
    // const timeVal = time[1].split(':')
    // console.log(last_visit.toString())

    return(<div className='traffic-display-unit' >
        <p className='traffic-text' >{date_created}</p> <p className='traffic-text' >{id}</p>  <p className='traffic-text' >{unique_id}</p><p className='traffic-text' >{remount}</p><p className='traffic-text' >{last_visit}</p>
    </div>)
}

export default ShowTraffic