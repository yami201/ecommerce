import { useSelector } from "react-redux"
import Spinner from "../../spinner/spinner.component"
import { selectCategory , selectCategoriesIsLoading} from "../../../store/categories/categories.selector"
import CategoryPreview from "../../category-preview/category-preview.component"
const CategoriesPreview = () => {
    const categoriesMap = useSelector((state) => selectCategory(state))
    const isLoading =  useSelector(selectCategoriesIsLoading)
    return (
        <>
            {   
                isLoading ? <Spinner/> : (
                    Object.keys(categoriesMap).map(title => {
                        const products = categoriesMap[title]
                        return <CategoryPreview key={title} title={title} products={products}/>
                    })
                )

            }
        </>
    )
}
export default CategoriesPreview