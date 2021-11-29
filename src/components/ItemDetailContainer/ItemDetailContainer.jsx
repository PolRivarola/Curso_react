import { useState,useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetial'
import {products} from '../../data/products'
import { useParams } from 'react-router'
const ItemDetailContainer = ()=>{
    const [pelicula, setPelicula] = useState({});
    const {itemID} = useParams()
    const [irAlCart,setIrAlCart]= useState(false)

    const onAdd = (cantidad)=>{
        console.log({...pelicula,cantidad:cantidad})
        setIrAlCart(true)
    }

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
                onAdd={onAdd}
                irAlCart={irAlCart}
                />           
        </div>
            )
}

export default ItemDetailContainer