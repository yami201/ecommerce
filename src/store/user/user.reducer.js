import userActionTypes from "./user.types"
const initialState = {
    currentUser:null,
}
export const userReducer = (state = initialState,action={}) => {
    const {type,payload} = action
    switch(type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }
        default:
            return state
    }
}
