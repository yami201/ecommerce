import { useParams } from "react-router-dom"
import { useContext , useEffect , useState} from "react"
import { CategoriesContext } from "../../../contexts/categories.context"
import ProductCard from "../../product-card/product-card.component"
import {CategoryContainer , CategoryTitle} from "./category.style"


const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
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