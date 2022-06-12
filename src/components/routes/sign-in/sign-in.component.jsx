import { 
    signInWithGooglePopUp,
    createUserDoc,
 } from "../../../utils/firebase/firebase.utils"
const SignIn = () => {
    const GoogleLog = async () =>{
        const {user} = await signInWithGooglePopUp()
        createUserDoc(user)
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={GoogleLog}>Sign In with google</button>
        </div>
    )
}
export default SignIn