import carrito from '../../assets/img/carrito.png' 
import './cartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    return(
        <Link to="/cart">
        <img className="carrito" src={carrito} alt="" />    
        </Link>
    )}

export default CartWidget