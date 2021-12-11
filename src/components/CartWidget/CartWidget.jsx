import carrito from '../../assets/img/carrito.png' 
import './cartWidget.css'
import { Link } from 'react-router-dom'
import { useCantidad,  } from '../../context/contextPelis'



const CartWidget = () =>{
    const cantidad = useCantidad()
    return(
        <Link to="/cart">
        <div className="carrito">
        <img  src={carrito} alt="" /> 
         <p>{cantidad}</p>

        </div>
                  
        </Link>
    )}

export default CartWidget