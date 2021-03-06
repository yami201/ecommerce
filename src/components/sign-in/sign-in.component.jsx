import { useState } from "react"
import { useDispatch } from "react-redux"
import { googleSignInStart , emailSignInStart} from "../../store/user/user.action"

import Button,{buttonClassTypes} from "../buttons/button.component"
import FormInput from "../form-input/form-input.component"


import {SignInContainer, Title, OrSpan, OrLine} from "./sign-in.style.jsx"

const defaultInfo = {
    email:'',
    password:'',
}
const SignIn = () =>{
    const dispatch = useDispatch()
    const [userInfo,setUserInfo] = useState(defaultInfo)
    const { email,password} = userInfo

    const handleSubmit = async (event) =>{
        event.preventDefault()

        try{
            dispatch(emailSignInStart(email,password))
            setUserInfo(defaultInfo)
        }catch(err){
            switch(err.code){
                case('auth/wrong-password'):
                    alert('the password for this email is incorrect')
                    break
                case('auth/user-not-found'):
                    alert('there is no user with this email')
                    break
                default:
                    console.log(err.code)
            }
        }
    }
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    const handleChange = (event) =>{
        const {name,value} = event.target
        setUserInfo({
            ...userInfo,
            [name]:value
        })
        
    }
    return (
        <SignInContainer>
            <Title>Sign In</Title>
            <Button 
                        type='button'
                        buttonType={buttonClassTypes.google}
                        onClick={signInWithGoogle}
                    >Sign in with google</Button>
            <OrLine/>
            <OrSpan>OR</OrSpan>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    required 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={handleChange}/>
                <FormInput
                    label='Password'
                    required 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={handleChange}/>
                <Button 
                    type="submit"
                    buttonType={buttonClassTypes.sign}>Sign In</Button>
                {/* <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button 
                        type='button'
                        buttonType={buttonClassTypes.google}
                        onClick={signInWithGoogle}
                    >Google Sign In</Button>
                </ButtonsContainer> */}
            </form>
        </SignInContainer>

    )
}

export default SignIn