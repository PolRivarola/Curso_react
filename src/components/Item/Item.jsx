import './item.css'

const Item = ({item}) =>{
    return(
        <div className="item-wrap" >
            <img src={item.imgUrl} alt={item.description} />
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default Item