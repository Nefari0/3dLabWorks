import { 
    AlertContainer,
    AlertOverlay 
} from "./alert.styls";
import Button from "../../Home/Button/button.component";

const Alert = (props) => {

    const {
        alert,
        setAlert
    } = props

    return (
        <AlertOverlay>
            <AlertContainer>
                {/* <p>{alert}</p> */}
                <p>dummy text</p>
                <Button 
                    text={'close'}
                    onClick={() => setAlert(null)}
                />
            </AlertContainer>
        </AlertOverlay>
    )
}

export default Alert