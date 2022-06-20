import {categoriesActionTypes} from "./categories.types"

const categoriesInitalState = {
    categories: [],
    isLoading:false,
    error:null,
}
export const categoriesReducer = (state=categoriesInitalState,action={}) => {
    const {type,payload} =  action
    switch(type){
        case categoriesActionTypes.fetchCategoriesStart:
            return {
                ...state,
                isLoading:true
            }
        case categoriesActionTypes.fetchCategoriesSuccess:
            return {
                ...state,
                categories:payload,
                isLoading:false,
            }
        case categoriesActionTypes.fetchCategoriesFailed:
            return {
                ...state,
                error:payload,
                isLoading:false,
            }
        default:
            return state
    }
}