import Button from '../Button/Button'
import './itemListContainer.css'
import ItemCounter from '../ItemCount/ItemCount'

const itemListContainer = (props) =>{
    return(
        <section className="ilc-wrap">
            <h2 className="greet">{props.greeting}</h2>
            <Button styleBtn="btnGeneric"txt="Estoy Listo!"/>
        <ItemCounter stock="4" item="Balsamo"/>
        </section>
    )
}

export default itemListContainer