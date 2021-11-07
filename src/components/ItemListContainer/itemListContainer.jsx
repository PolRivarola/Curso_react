import Button from '../Button/Button'
import './itemListContainer.css'


const itemListContainer = (props) =>{
    return(
        <section className="ilc-wrap">
            <h2 className="greet">{props.greeting}</h2>
            <Button txt="Estoy Listo!"/>
        </section>
    )
}

export default itemListContainer