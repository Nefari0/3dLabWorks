import { BaseButton } from "./button.styles";

const Button = (props) => {

    const {
        text
    } = props

    return (
        <BaseButton
            {...props}
        >
            {text}
        </BaseButton>
    )
}

export default Button