import { createAction } from "../../utils/reducer/reducer.utils"
import { categoriesActionTypes } from "./categories.types"

export const setCategories = (categriesArray) => createAction(categoriesActionTypes.SET_CATEGORIES,categriesArray)
