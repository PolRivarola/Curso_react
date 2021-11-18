import { useState,useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetial'

const ItemDetailContainer = ()=>{

    const peli = {
        title:'Psicosis',
        description:'Película de terror psicológico',
        imgUrl:'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f4b07e1b31a416366efdfeeeb46e6115_1833547c-f6b9-4308-b706-aca2647f01d9_500x749.jpg?v=1573652354',
        price:'199$',
        id:7,
        stock:2
    }

 
    const [isLoading,setIsLoading] = useState(true)
    const [pelicula, setPelicula] = useState()
        
        const promiseItems = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(peli)
            },2000)
        })
        

        useEffect(()=>{
            promiseItems
            .then((res)=> {
                setPelicula(res)
                setIsLoading(false)
            })
            .catch((error)=>{
                console.log(error)
            })},[setIsLoading])


    return(
        <div className="detail-wrap">
            {isLoading
            ?<h2>Cargando...</h2>
            :   <ItemDetail
                item={pelicula} 
                />
            }
        </div>
            )
}

export default ItemDetailContainer