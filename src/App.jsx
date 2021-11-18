
import { Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

//Es para acomodar las rutas


const App = () => {
  return(
    <Fragment>
      
      <Header />
      <ItemListContainer greeting="Buenas peliculas, mejores precios"/>
      
      
    </Fragment> 
  )
}

export default App;

// JSX -> JS + html -> JavaScript Xml