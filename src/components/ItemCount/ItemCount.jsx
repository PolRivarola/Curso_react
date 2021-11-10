import { useState } from 'react';
import './itemCounter.css'

const ItemCounter = (props) =>{

    

    const[number,setNumber] = useState(0)
  
    const inc = ()=>{
        if (props.stock != 0 && number < props.stock){
            setNumber(number + 1)
        }
    }

    const dis = ()=>{
        if (number != 0){
            setNumber(number - 1)
        }
    }

    return(
        <div className="counter-wrap">
            
                <div className="itemStock">
                    <p>{props.item}</p>
                    <p>{`En stock: ${props.stock}`}</p>
                </div>
                
                    <p className="number">{number}</p>
                
                <div className="btnItem">
                    <button onClick={inc}>+</button>
                    <button onClick={dis}>-</button>
                </div>    
        </div>
    )
}

export default ItemCounter