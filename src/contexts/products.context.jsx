import { createContext, useState } from "react"
import ShopData from "../shop-data.json"

export const ProductsContext = createContext({
    products:[],
})

export const ProductsProvider = (({children}) => {
    const [products,setProducts] = useState(ShopData)
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )  
})