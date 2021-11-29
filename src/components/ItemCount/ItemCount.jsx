import { useState } from 'react';
import './itemCounter.css'

const ItemCounter = ({stock,onAdd}) =>{

    
    const[number,setNumber] = useState(0)
  
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
                    <button disabled={number === 0} onClick={()=>onAdd(number)}>Agregar</button>
                </div>    
        </div>
    )
}

export default ItemCounter