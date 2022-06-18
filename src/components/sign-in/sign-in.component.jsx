import { useState, useEffect} from "react"
import { getRedirectResult } from "firebase/auth"; 


import { 
    signInUserDocWithEmailAndPassword,
    signInWithGoogle,
    auth,
 } from "../../utils/firebase/firebase.utils"


import Button,{buttonClassTypes} from "../buttons/button.component"
import FormInput from "../form-input/form-input.component"


import {SignInContainer,ButtonsContainer} from "./sign-in.style.jsx"

const defaultInfo = {
    email:'',
    password:'',
}
const SignIn = () =>{
    const [userInfo,setUserInfo] = useState(defaultInfo)
    const { email,password} = userInfo



    const handleSubmit = async (event) =>{
        event.preventDefault()

        try{
            const {user} = await signInUserDocWithEmailAndPassword(email,password)
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
    useEffect(()=>{
        const LogInUser = async () =>{
           await getRedirectResult(auth)
        }
        LogInUser()
    },[])

    const handleChange = (event) =>{
        const {name,value} = event.target
        setUserInfo({
            ...userInfo,
            [name]:value
        })
        
    }
    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign In with email and password</span>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button 
                        type='button'
                        buttonType={buttonClassTypes.google}
                        onClick={signInWithGoogle}
                    >Google Sign In</Button>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>

    )
}

export default SignIn