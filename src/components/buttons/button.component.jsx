import {BaseButton , GoogleSignInButton , InvertedButton ,ButtonSpinner} from"./button.style.styles"

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
const Button = ({children,buttonType,isLoading,...props}) =>{
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton disabled={isLoading} {...props}>
            {
                isLoading ? <ButtonSpinner/> : children
            }
        </CustomButton> 
    )

}
export default Button