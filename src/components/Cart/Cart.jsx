import { useBorrarPeli, useCantidad, useCartPelis, useClearCarrito } from "../../context/contextPelis"
import './cart.css'
import { Link } from "react-router-dom"
export const Cart = ()=>{


    const borrarPeli = useBorrarPeli()
    const cartPelis = useCartPelis()
    const clearCarrito = useClearCarrito()
    const  cantidad = useCantidad()

console.log(cartPelis)
    return(
        <div className="cart-wrap">
        {
            cartPelis?.map((item) => {
                return(
                    <div className="peliCart" key={item.id} onClick={() =>borrarPeli(item)}>
                        <h2>{item.title}</h2>
                        <h3>{item.price}</h3>
                        <h3>{`Cantidad: ${item.cartCount}`}</h3>
                    </div>
                )
            })
        }
        {(cartPelis.length > 0) ?
            <div className="extraCart">            
                <h2>{`Peliculas en carrito: ${cantidad}`}</h2>
                <button onClick={()=>clearCarrito()}>{`Vaciar carrito`}</button>
            </div>

        :
        <div className="noPelis">
            <h1>{`No hay pelis, pero puedes encontrarlas fabulosas opciones`} </h1>
            <Link to='/'>
            <h1>Aqui!</h1>
            </Link>
        </div>}

        </div>
    )
}