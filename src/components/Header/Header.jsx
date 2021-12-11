import {  NavLink, Link } from 'react-router-dom';
import { useCantidad } from '../../context/contextPelis';
import CartWidget from '../CartWidget/CartWidget';
import './Header.css';
const Header = () => {


  const categories= [
    {id: '001', address:'/',text:'Todas '},
    {id:'002', address:'/category/Terror',text:'Terror'},
    {id: '003', address:'/category/Acción',text:'Acción'},
    {id: '004', address:'/category/Aventura',text:'Aventura'},
    {id: '006', address:'/category/Drama',text:'Drama'}
  ];

    const cantidad = useCantidad()

    return(
        
        <div className="headNav">
        <Link to='/'>
        <h1>CineLife</h1>
        </Link>
        <nav>
          <ul>
            {categories.map((cat) => {
              return(
                <li key={cat.id}>
                  <NavLink to={cat.address}
                    className={({isActive})=>(isActive? 'activeClass':'')}>
                    {cat.text}</NavLink>
                </li>
              )
            })}
            {(cantidad>0) && <li><CartWidget/></li>}
            

          </ul>
        </nav>
      </div>
    )
}

export default Header