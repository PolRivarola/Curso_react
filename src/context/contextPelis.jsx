
import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
const Products = React.createContext()

export function ProductsProvider({children}){

    const [cartPelis, setCartPelis] = useState([])
    const [cantidad,setCantidad] = useState(0)
    // const [irAlCart,setIrAlCart] = useState(false)


    const isOnCart = (product)=>{
        return cartPelis?.findIndex(item => item.id === product.id)
    }


    const clearCarrito = ()=>{
        setCartPelis([])
        console.log(cartPelis)
    }

    const addToCart = (product,number)=>{
        if(isOnCart(product) === -1){
            const prodAux = 
            {
                cartCount: number,
                category: product.category,
                description:product.description,
                id:product.id,
                imgUrl:product.imgUrl,
                price:product.price,
                stock:product.stock,
                title:product.title
                
            } 
            console.log(prodAux)
            setCartPelis([...cartPelis,prodAux])
            setCantidad(cantidad + number)
            // setIrAlCart(true)

        }else{alert('Esta peli ya esta en tu carrito!')}
    }
    
    const borrarPeli = (product) =>{
        setCartPelis(cartPelis.filter(item => item.id !== product.id))
        setCantidad(cantidad-product.cartCount)
    }

    console.log(cartPelis)
    return(
        <Products.Provider value={{addToCart,cartPelis,borrarPeli,cantidad,clearCarrito}}>
            {children}
        </Products.Provider>
    )

}
export function useAddToCart(){
    return useContext(Products).addToCart
}

export function useCartPelis(){
    return useContext(Products).cartPelis       
}

export function useBorrarPeli(){
    return useContext(Products).borrarPeli       
}

export function useCantidad(){
    return useContext(Products).cantidad       
}

export function useClearCarrito(){
    return useContext(Products).clearCarrito       
}

// export function useIrAlCart(){
//     return useContext(Products).irAlCart       
// }

export default Products