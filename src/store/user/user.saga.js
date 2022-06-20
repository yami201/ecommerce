import { takeLatest , all , call , put } from "redux-saga/effects";
import userActionTypes from "./user.types";
import { 
    getCurrentUser, 
    createUserDoc, 
    signInWithGooglePopUp, 
    signInUserDocWithEmailAndPassword, 
    createUserAuthWithEmailAndPassword,
    signOutUser,
} from "../../utils/firebase/firebase.utils";
import {authRequestSuccess , authRequestFailed } from "./user.action";
export function* getSnapshotfromUserAuth(userAuth, additionnalDetails) {
    try{
        const userSnapshot = yield call(createUserDoc,userAuth,additionnalDetails)
        yield put(authRequestSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    } catch(err) {
        yield put(authRequestFailed(err))
    }
}
export function* isUserrAuthenticated() {
    try{
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getSnapshotfromUserAuth,userAuth)
    }catch(err) {
        yield put(authRequestFailed(err))
    }
}
export function* signInwithGoogle() {
    try{
        const {user} = yield call(signInWithGooglePopUp)
        yield call(getSnapshotfromUserAuth,user)
    }catch(err){
        yield put(authRequestFailed(err))
    }

}
export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user } = yield call(signInUserDocWithEmailAndPassword,email,password)
        yield call(getSnapshotfromUserAuth,user)
    }catch(err){
        yield put(authRequestFailed(err))
    }
}
export function* signUp({payload:{displayName,email,password}}){
    try{
        const { user } = yield call(createUserAuthWithEmailAndPassword,email,password)
        yield call(getSnapshotfromUserAuth,user,{displayName})
    } catch(err){
        yield put(authRequestFailed(err))
    }
}
export function* signOutFromApp(){
    yield call(signOutUser)
}
export function* onSignOut(){
    yield takeLatest(userActionTypes.SIGN_OUT,signOutFromApp)
}
export function* onEmailSignUpStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_UP_START,signUp)
}
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInwithGoogle)
}
export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserrAuthenticated)
}
export function* userSaga() {
    yield all(
        [
            call(onCheckUserSession), 
            call(onGoogleSignInStart), 
            call(onEmailSignInStart),
            call(onEmailSignUpStart),
            call(onSignOut)
        ]
    )
}


