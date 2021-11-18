import ItemCounter from '../ItemCount/ItemCount'
import './itemDetail.css'



const ItemDetail = ({item}) =>{
    return(
        <div className="itemDetail-wrap" >
            <div className="imgSide">
            <img src={item.imgUrl} alt={item.description} />
            </div>
            <div className="pSide">
            <p className="itemInfo">Nombre: {item.title}</p>
            <p className="itemInfo">Género: {item.description}</p>
            <p className="itemInfo">Precio: {item.price}</p>
            <div className="detailCounter">
            <ItemCounter stock={item.stock}/>
            </div>
            </div>
            
        </div>
    )
}
export default ItemDetail