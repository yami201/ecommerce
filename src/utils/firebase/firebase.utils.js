import { initializeApp } from "firebase/app"
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth"
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAJTPvYnY9ltXHKddCxaJCphGWhl15yZ3E",
    authDomain: "ecommerce-76f26.firebaseapp.com",
    projectId: "ecommerce-76f26",
    storageBucket: "ecommerce-76f26.appspot.com",
    messagingSenderId: "796742061531",
    appId: "1:796742061531:web:546ac9d75483c1691fabfe"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth,provider)

export const db = getFirestore()

export const createUserDoc = async (userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid)

    console.log(userDocRef)

    const userSnap = await getDoc(userDocRef)

    console.log(userSnap)
    console.log(userSnap.exists())

    if(!userSnap.exists()){
        const {displayName , email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch(err){
            console.log('cannot create user : ',err.message)
        }
    }
    return userDocRef
}