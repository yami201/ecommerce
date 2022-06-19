import {categoriesActionTypes} from "./categories.types"

const categoriesInitalState = {
    categories: []
}
export const categoriesReducer = (state=categoriesInitalState,action={}) => {
    const {type,payload} =  action
    switch(type){
        case categoriesActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories:payload,
            }
        default:
            return state
    }
}