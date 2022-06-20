import userActionTypes from "./user.types"
export const initialState = {
    currentUser:null,
    isLoading:false,
    error:null,

}
export const userReducer = (state = initialState,action={}) => {
    const {type,payload} = action
    switch(type){
        case userActionTypes.AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                error:null,
                currentUser:payload
            }
        case userActionTypes.AUTH_REQUEST_FAILED:
            return {
                ...state,
                error:payload

            }
        case userActionTypes.SIGN_OUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}