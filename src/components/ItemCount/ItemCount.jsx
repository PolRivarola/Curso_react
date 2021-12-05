import { useState } from 'react';
import { useAddToCart } from '../../context/contextPelis';
import './itemCounter.css'

const ItemCounter = ({item,stock}) =>{

    
    const[number,setNumber] = useState(0)
  
    const addToCart = useAddToCart()


    const inc = ()=>{
        if (stock !== 0 && number < stock){
            setNumber(number + 1)
        }
    }

    const dis = ()=>{
        if (number !== 0){
            setNumber(number - 1)
        }
    }
    
    

    return(
        <div className="counter-wrap">
            
                <div className="itemStock">
                    
                    <p>{`En stock: ${stock}`}</p>
                </div>
                
                    <p className="number">{number}</p>
                
                <div className="btnItem">
                    <button onClick={inc}>+</button>
                    <button onClick={dis}>-</button>
                </div>
                <div>
                    <button disabled={number === 0} onClick={()=>addToCart(item,number)}>Agregar</button>
                </div>    
        </div>
    )
}

export default ItemCounter