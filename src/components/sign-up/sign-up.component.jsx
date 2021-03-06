import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUpStart , googleSignInStart } from "../../store/user/user.action"
import Button, {buttonClassTypes} from "../buttons/button.component"
import FormInput from "../form-input/form-input.component"

import {SignUpContainer, Title, OrLine, OrSpan} from "./sign-up.style.jsx"

const defaultInfo = {
    displayName:'',
    email:'',
    password:'',
    confpassword:'',
}
const SignUp = () =>{
    const dispatch = useDispatch()
    const [userInfo,setUserInfo] = useState(defaultInfo)
    const { displayName, email, password, confpassword} = userInfo

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()

        if(password !== confpassword){
            alert("passwords don't match")
            return
        }
        try{
            dispatch(signUpStart(displayName,email,password))
            setUserInfo(defaultInfo)
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('email already in use')
            } else {
                console.log(err.code)
            }
            
        }
    }
    const handleChange = (event) =>{
        const {name,value} = event.target
        setUserInfo({
            ...userInfo,
            [name]:value
        })
        
    }
    return (
        <SignUpContainer>
            <Title>Sign Up</Title>
            <Button 
                        type='button'
                        buttonType={buttonClassTypes.google}
                        onClick={signInWithGoogle}
                    >Sign up with google</Button>
            <OrLine/>
            <OrSpan>OR</OrSpan>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display name'
                    required 
                    type="text" 
                    name="displayName" 
                    value={displayName}
                    onChange={handleChange}
                />

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

                <FormInput
                    label='Confirm password'
                    required 
                    type="password" 
                    name="confpassword" 
                    value={confpassword}
                    onChange={handleChange}/>

                <Button 
                    type="submit"
                    buttonType={buttonClassTypes.sign}>Sign Up</Button>
            </form>
        </SignUpContainer>

    )
}

export default SignUp