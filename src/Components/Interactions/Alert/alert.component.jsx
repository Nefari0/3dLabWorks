import { connect } from "react-redux";
import { setAlert } from "../../../ducks/interactionsReducer";

import { 
    AlertContainer,
    AlertOverlay 
} from "./alert.styls";
import Button from "../../Home/Button/button.component";

const Alert = (props) => {
    const { setAlert,alert } = props

    return (
        <AlertOverlay>
            <AlertContainer>
                <p>{alert}</p>
                <Button 
                    text={'close'}
                    onClick={() => setAlert('')}
                />
            </AlertContainer>
        </AlertOverlay>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {setAlert})(Alert)