import { createAction } from "../../utils/reducer/reducer.utils"
import { categoriesActionTypes } from "./categories.types"

export const setCategories = (categriesArray) => 
    createAction(categoriesActionTypes.SET_CATEGORIES,categriesArray)


export const fetchCategoriesStart = () => createAction(categoriesActionTypes.fetchCategoriesStart)

export const fetchCategoriesSuccess = (categriesArray) => createAction(categoriesActionTypes.fetchCategoriesSuccess,categriesArray)

export const fetchCategoriesFailed = (error) => createAction(categoriesActionTypes.fetchCategoriesFailed,error)
