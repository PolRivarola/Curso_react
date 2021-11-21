import { useState,useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetial'
import {products} from '../../data/products'
import { useParams } from 'react-router'
const ItemDetailContainer = ()=>{
    const [pelicula, setPelicula] = useState({});
    const {itemID} = useParams()

    console.log(itemID)
        useEffect(()=>{

            const promiseItems = new Promise((resolve)=>{
               
                    resolve(products)
                
            });
            promiseItems.then((res)=> {
                itemID && setPelicula(res.find((item) => item.id === 
                itemID))
            
            });
        },[itemID]);
    return(
        <div className="detail-wrap">
               <ItemDetail
                item={pelicula}
                />           
        </div>
            )
}

export default ItemDetailContainer