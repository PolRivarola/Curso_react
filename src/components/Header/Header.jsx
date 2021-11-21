import { Link, NavLink } from 'react-router-dom';
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

    return(
        
        <div className="headNav">
        <h1>CineLife</h1>
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
            <li><CartWidget/></li>

          </ul>
        </nav>
      </div>
    )
}

export default Header