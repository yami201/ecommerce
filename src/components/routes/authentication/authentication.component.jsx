import SignUp from "../../sign-up/sign-up.component";
import SignIn from "../../sign-in/sign-in.component";
import {AuthenticationContainer}from'./authentication.style'
const Authentication = () =>{


    return (
        <AuthenticationContainer>
            <SignIn/>
            <SignUp/>
        </AuthenticationContainer>
        
    )
}
export default Authentication