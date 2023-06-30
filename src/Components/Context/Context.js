import { createContext, useContext } from "react";
import {useState} from 'react'
 const MyContext = createContext()
export const useProduct = ()=>useContext(MyContext)
const ContextProvider = ({children})=>{
    const [cartProducts,setCartProducts] = useState([]);
    const hello="hello"
const add=(product)=>{
setCartProducts([...cartProducts,product])
alert("product is added to cart")
}
const remove=(id)=>{
let filteredData = cartProducts.filter((product)=>product.id!==id)
setCartProducts(filteredData)
}
return(
    <MyContext.Provider value={{add,remove,cartProducts,hello}}>
        {children}
    </MyContext.Provider>
)

}

export default ContextProvider;