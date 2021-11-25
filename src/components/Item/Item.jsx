import { Link } from 'react-router-dom'
import './item.css'

const Item = ({item}) =>{
    return(
        <Link to={`/product/${item.id}`}>
        <div className="item-wrap" >
            <img src={item.imgUrl} alt={item.description} />
            <p className="nomYPrecio">{item.title}</p>
            <p className="nomYPrecio">{item.price}</p>
        </div>
        </Link>
    )
}



export default Item