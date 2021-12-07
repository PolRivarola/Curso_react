import ItemCounter from '../ItemCount/ItemCount'
import './itemDetail.css'
import { Link } from 'react-router-dom'
import { useIrAlCart } from "../../context/contextPelis"


const ItemDetail = ({item}) =>{

    const irAlCart = useIrAlCart()
    return(
        <div className="itemDetail-wrap" >
            <div className="imgSide">
            <img src={item.imgUrl} alt={item.description} />
            </div>
            <div className="pSide">
            <p className="itemInfo">Nombre: {item.title}</p>
            <p className="itemInfo">Género: {item.description}</p>
            <p className="itemInfo">Precio: {item.price}</p>

            {irAlCart ? (
                <>
                <Link style={{color:"white"}} to="/cart">Terminar compra</Link>     
                </>
                
            ):
            (
                <>
                <div className="detailCounter">
                <ItemCounter item={item} stock={item.stock}  pelicula={item.title}/>
                </div>
                </>
             )} 
            
            

            </div>
            
        </div>
    )
}
export default ItemDetail