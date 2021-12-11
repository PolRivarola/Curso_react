
import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
const Products = React.createContext()

export function ProductsProvider({children}){

    const [cartPelis, setCartPelis] = useState([])
    const [cantidad,setCantidad] = useState(0)
    const [irAlCart,setIrAlCart] = useState(false)
    const [total,setTotal] = useState(0)


    const isOnCart = (product)=>{
        return cartPelis?.findIndex(item => item.id === product.id)
    }


    const clearCarrito = ()=>{
        setCartPelis([])
        setCantidad(0)
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
            setTotal(total + product.price * number)
            setIrAlCart(true)
            setTimeout(()=>{
                setIrAlCart(false)
            },3000)

        }else{
           

            
        

            let cant = 0 ;
            let tot = 0
            if (cartPelis[isOnCart(product)].cartCount + number <= cartPelis[isOnCart(product)].stock ){
                cartPelis[isOnCart(product)].cartCount = cartPelis[isOnCart(product)].cartCount + number
                setCantidad(cartPelis[isOnCart(product)].cartCount + number + cantidad)
                cartPelis.map((product)=>{
                    cant += product.cartCount
                    tot += product.cartCount * product.price
                    console.log(tot)
                })
                setCantidad(cant)
                setTotal(tot)
                setIrAlCart(true)
                setTimeout(()=>{
                    setIrAlCart(false)
                },3000)
            }else{
                alert("Estas intentando poner mas unidades de este producto de las que hay disponibles!")
            }
            

        }
    }
    
    const borrarPeli = (product) =>{
        setCartPelis(cartPelis.filter(item => item.id !== product.id))
        setCantidad(cantidad-product.cartCount)
        setTotal(total - product.cartCount * product.price)
    }

    console.log(cartPelis)
    return(
        <Products.Provider value={{addToCart,cartPelis,borrarPeli,cantidad,clearCarrito,irAlCart,total}}>
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

export function useTotal(){
    return useContext(Products).total       
} 

export function useIrAlCart(){
    return useContext(Products).irAlCart       
}

export default Products