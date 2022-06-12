import { useState } from "react"
import { createUserDoc, createUserDocWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import Button from "../buttons/button.component"
import FormInput from "../form-input/form-input.component"

import "./sign-up.style.scss"

const defaultInfo = {
    displayName:'',
    email:'',
    password:'',
    confpassword:'',
}
const SignUp = () =>{
    const [userInfo,setUserInfo] = useState(defaultInfo)
    const { displayName, email, password, confpassword} = userInfo
    const handleSubmit = async (event) =>{
        event.preventDefault()

        if(password !== confpassword){
            alert("passwords don't match")
            return
        }
        try{
            const {user} = await createUserDocWithEmailAndPassword(email,password)
            await createUserDoc(user,{ displayName })
            setUserInfo(defaultInfo)
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('email already in use')
            } else {
                console.log(err.message)
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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with email and password</span>
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

                <Button type="submit">Sign Up</Button>
            </form>
        </div>

    )
}

export default SignUp