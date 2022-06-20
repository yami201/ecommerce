import { useParams } from "react-router-dom"
import { useEffect , useState} from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../product-card/product-card.component"
import Spinner from "../../spinner/spinner.component"
import {CategoryContainer , CategoryTitle} from "./category.style"
import { selectCategory , selectCategoriesIsLoading} from "../../../store/categories/categories.selector"

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector((state) => selectCategory(state))
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products , setProducts] = useState(categoriesMap[category])
    useEffect(()=> {
        setProducts(categoriesMap[category])
    },[category,categoriesMap])
    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner/> : (
                    <CategoryContainer>
                        
                        {
                            products &&
                            products.map((product => 
                                <ProductCard key={product.id} product={product}/>
                            ))
                        }
                    </CategoryContainer>
                )
            }

        </>
        
    )
}
export default Category