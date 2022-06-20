import { initializeApp } from "firebase/app"
import { 
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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

export const AddCollectionAndDocs = async (collectionKey,objsToAdd) => {
    const collectionRef = collection(db,collectionKey)
    const batch = writeBatch(db)

    objsToAdd.forEach( (obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase() )
        batch.set(docRef, obj)
    })

    await batch.commit()
}
export const getCategoriesAndDocs = async () => {
    const collectionRef = collection(db,"categories")
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
    

}
export const createUserDoc = async (userAuth,moreInfo) => {
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnap = await getDoc(userDocRef)
    if(!userSnap.exists()){
        const {displayName , email} = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...moreInfo,
            })
        } catch(err){
            console.log('cannot create user : ',err.message)
        }
    }
    return userSnap
}
export const createUserAuthWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return


    return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInUserDocWithEmailAndPassword = async (email,password) =>{
    if(!email || !password) return


    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth,callback)

export const getCurrentUser = () => {
    return new Promise((resolve,reject)=> {
        const unsubscribe = onAuthStateChanged(
            auth,
            userAuth => {
                unsubscribe()
                resolve(userAuth)
            }, 
            reject
        )
    })
}