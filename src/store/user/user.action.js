import { createAction } from "../../utils/reducer/reducer.utils"
import userActionTypes from "./user.types"
export const setCurrentUser = (user) => createAction(userActionTypes.SET_CURRENT_USER,user)

export const checkUserSession = () => createAction(userActionTypes.CHECK_USER_SESSION)

export const googleSignInStart = () => createAction(userActionTypes.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email,password) => createAction(userActionTypes.EMAIL_SIGN_IN_START,{email,password})
export const signUpStart = (displayName,email,password) => createAction(userActionTypes.EMAIL_SIGN_UP_START,{displayName,email,password})


export const authRequestSuccess = (user) => createAction(userActionTypes.AUTH_REQUEST_SUCCESS,user)

export const authRequestFailed = (error) => createAction(userActionTypes.AUTH_REQUEST_FAILED,error)


export const signOutAction = () => createAction(userActionTypes.SIGN_OUT)