import "./button.style.styles.scss"

const buttonClassTypes = {
    google:"google-sign-in",
    inverted:"inverted",
}

const Button = ({children,buttonType,...props}) =>{
    return <button className={`button-container ${buttonClassTypes[buttonType]}`} {...props}>{children}</button>
}
export default Button