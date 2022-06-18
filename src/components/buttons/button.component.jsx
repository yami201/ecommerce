import {BaseButton , GoogleSignInButton , InvertedButton } from"./button.style.styles"

export const buttonClassTypes = {
    base: 'base',
    google:"google-sign-in",
    inverted:"inverted",
}
const getButton = (buttonType = buttonClassTypes.base) => (
    {
        [buttonClassTypes.base]:BaseButton,
        [buttonClassTypes.google]:GoogleSignInButton,
        [buttonClassTypes.inverted]:InvertedButton,
    }[buttonType]
)
const Button = ({children,buttonType,...props}) =>{
    const CustomButton = getButton(buttonType)
    return <CustomButton {...props}>{children}</CustomButton>
}
export default Button