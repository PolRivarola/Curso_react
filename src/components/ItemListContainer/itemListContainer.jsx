import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { products } from '../../data/products'
import { useState } from 'react/cjs/react.development'
import { useParams } from 'react-router'
import { useEffect } from 'react'


const ItemListContainer = (props) =>{
    const [items, setItems]= useState([])
    const {catID} = useParams();
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        const promiseItems = new Promise((resolve,reject)=>{
            setIsLoading(true)

            setTimeout(()=>{
                resolve(products)
            },2000)
        })
        promiseItems
        .then((res)=> {
            catID ? setItems(res.filter(item => item.category === catID ))
            : setItems(res);

        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[catID])
    return(
        

        <section className="ilc-wrap">
            {isLoading ? <h2>Cargando...</h2>
        :<><h2 className="greet">{props.greeting}</h2>
    <ItemList items={items}/>
    </>}
            
        </section>
    )
}

export default ItemListContainer