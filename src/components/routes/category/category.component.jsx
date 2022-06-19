import { useParams } from "react-router-dom"
import { useEffect , useState} from "react"
import { useSelector } from "react-redux"
import ProductCard from "../../product-card/product-card.component"
import {CategoryContainer , CategoryTitle} from "./category.style"
import { selectCategory } from "../../../store/categories/categories.selector"

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector((state) => selectCategory(state))
    
    const [products , setProducts] = useState(categoriesMap[category])
    useEffect(()=> {
        setProducts(categoriesMap[category])
    },[category,categoriesMap])
    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                
                {
                    products &&
                    products.map((product => 
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </CategoryContainer>
        </>
        
    )
}
export default Category