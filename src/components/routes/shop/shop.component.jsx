import { Routes , Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategoriesAndDocs } from "../../../utils/firebase/firebase.utils"
import {setCategories} from "../../../store/categories/categories.action"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const getCategoriesMap = async () =>{
            const categoriesArray = await getCategoriesAndDocs()
            dispatch(setCategories(categoriesArray))
        }
        getCategoriesMap()
      },[])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />}/>
        </Routes>
    )
}
export default Shop