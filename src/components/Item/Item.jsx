import ItemCounter from '../ItemCount/ItemCount'
import './item.css'

const Item = ({item}) =>{
    return(
        <div className="item-wrap" >
            <img src={item.imgUrl} alt={item.description} />
            <p className="nomYPrecio">{item.title}</p>
            <p className="nomYPrecio">{item.price}</p>
            <ItemCounter stock={item.stock}/>
        </div>
    )
}



export default Item