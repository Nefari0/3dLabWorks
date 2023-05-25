// import CheckerBoard from "./checkers/CheckerBoard"
import CheckerBoard from './Rowz/CheckerBoard/CheckerBoard'
// import GameInvite from "../UserPage/Friends/GameInvite" **DO NOT DELETE**
import './Table.css'
import { GameTable } from "./table.styles"
// import { loginUser,registerUser,updateUser } from '../../../ducks/userReducer'
// import { connect } from 'react-redux'

const Table = (props) => {

    const { challengeUser,currentGame,user } = props

// const [ openTable,setOpenTable ] = useState(false)

    return(
        <GameTable>
            <section className="game-title">
                <svg className="close-button" style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" onClick={() => props.hideView(null)} >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </section>
            {challengeUser != null ? <img className="foe-photo" src={challengeUser.gameInformation.photo}alt="" /> : null}
            <CheckerBoard currentGame={currentGame} client={props.client} user={user}/>
        </GameTable>
    )
}

// function mapStateToProps(reduxState) {
//     return reduxState
// }

// export default connect({mapStateToProps,updateUser})(Table)

export default Table