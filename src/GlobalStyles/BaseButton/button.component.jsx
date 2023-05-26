import { 
    BaseButton,
    Tiny,
 } from "./button.styles";
import TextType from "./types/button.type";



export const BUTTON_CLASSES = {
    base:'base',
    tiny:'tiny'
}

const getButtonClass = (buttonClass = BUTTON_CLASSES.base) =>
  ({
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.tiny]:Tiny
  }[buttonClass]);

export const BUTTON_TYPE = {
    textage:'textage'
}

const getButtonType = (buttonType = BUTTON_TYPE.textage) => 
    ({
        [BUTTON_TYPE.textage]:TextType
    }[buttonType])

const Button = ({text, buttonClass, buttonType, styles, selected, ...otherProps}) => {
    const CustomButton = getButtonClass(buttonClass)
    const ButtonType = getButtonType(buttonType);
    return (
    <div>
        <CustomButton
            style={styles}
            {...otherProps}
            selected={selected}
        >
            <ButtonType>
                {text}
            </ButtonType>
        </CustomButton>
    </div>
    )
}

export default Button