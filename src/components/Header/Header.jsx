import './Header.css';
import carrito from '../../assets/img/carrito.png' 
const Header = () => {
    return(
        
        <div className="headNav">
        <h1>ECDE</h1>
        <nav>
          <ul>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Catalogo</a></li>
            <li ><a href="">Contacto</a></li>
            <li><img className="carrito" src={carrito} alt="" /></li>

          </ul>
        </nav>
      </div>
    )
}

export default Header