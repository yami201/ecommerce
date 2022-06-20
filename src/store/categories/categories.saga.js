import { takeLatest , all , call , put } from "redux-saga/effects"
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils"
import { fetchCategoriesSuccess , fetchCategoriesFailed } from "./categories.action"
import { categoriesActionTypes } from "./categories.types"

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocs)
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}
export function* onFetchCategories() {
    yield takeLatest(categoriesActionTypes.fetchCategoriesStart,fetchCategoriesAsync)
}
export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}