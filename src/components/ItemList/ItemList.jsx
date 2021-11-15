import Item from '../Item/Item.jsx'
import './itemList.css'

const ItemList = (  {items}    ) =>{

    return(
        <div className="itemList-wrap">
        {items.map((product)=>(
                
                <Item
                key={product.id}
                item={product}
                />
        )
        )}
        </div>)
    }
    
    


export default ItemList