// import { BaseButton } from "../../ducks/global.styles";
import { BaseButton } from "./Button.styles"

export const Button = ({ text, condition, buttonType, buttonClass, styles, p, ...otherProps }) => {

    return (
        <BaseButton 
            condition={condition}
            styles={styles}
            {...otherProps}
        >
            {text}
        </BaseButton>
    )
}