
import { Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



const App = () => {
  return(
    <Fragment>
      {/* <h1>Listos</h1>
      {
        products.map((product)=>{
          return(
            <div key={product.id}>
              <h1>{product.name}</h1>
              <p>{product.color}</p>
            </div>
          )
        })
      } */}
      <Header />
      <ItemListContainer greeting="Buenas peliculas, mejores precios"/>
      
    </Fragment> 
  )
}

export default App;

// JSX -> JS + html -> JavaScript Xml