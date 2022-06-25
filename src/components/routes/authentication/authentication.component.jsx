import SignUp from "../../sign-up/sign-up.component";
import SignIn from "../../sign-in/sign-in.component";
import {AuthenticationContainer, OverlayPanel, AuthButton, Container, MethodContainer, Question}from'./authentication.style'
import { useState } from "react";
const Authentication = () =>{
    const [alreadySigned,setAlreadySigned] = useState(true)
    const width = window.innerWidth
    const logStateHandler = () => setAlreadySigned(!alreadySigned)
    return (
        <Container>
            <AuthenticationContainer>
                <OverlayPanel>
                    <h2>Welcome back!</h2>
                    <p>please sign in with your account's informations : </p>
                    <AuthButton onClick={logStateHandler}>Sign In</AuthButton>
                </OverlayPanel>
                <OverlayPanel>
                    <h2>New user ? Hello !</h2>
                    <p>please enter your personal informations to sign up : </p>
                    <AuthButton onClick={logStateHandler}>Sign Up</AuthButton>
                </OverlayPanel>
            </AuthenticationContainer>
            <MethodContainer state={alreadySigned}>{alreadySigned ? <SignIn/>:<SignUp/>}</MethodContainer>
            { width < 800 &&
                <Question onClick={logStateHandler}>
                   {
                    alreadySigned ? <>Don't have an account?</>:<>Already have an account?</>
                   } 
                </Question>}
        </Container>
    )
}
export default Authentication