import Button from '../Button/Button'
import './itemListContainer.css'
import ItemCounter from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { products } from '../../itemsArray'
import { useState } from 'react/cjs/react.development'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemListContainer = (props) =>{
    const [items, setItems]= useState([])
     const promiseItems = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
    promiseItems
    .then((res)=> {setItems(res);
    })
    .catch((error)=>{
        console.log(error)
    })

    return(
        <section className="ilc-wrap">
            <h2 className="greet">{props.greeting}</h2>
            <Button styleBtn="btnGeneric"txt="Estoy Listo!"/>
        <ItemList items={items}/>
        <ItemDetailContainer/>
        </section>
    )
}

export default ItemListContainer