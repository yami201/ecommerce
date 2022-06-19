import { useSelector } from "react-redux"
import { selectCategory } from "../../../store/categories/categories.selector"
import CategoryPreview from "../../category-preview/category-preview.component"

const CategoriesPreview = () => {
    const categoriesMap = useSelector((state) => selectCategory(state))
    return (
        <>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]
                    return <CategoryPreview key={title} title={title} products={products}/>
                })
            }
        </>
    )
}
export default CategoriesPreview