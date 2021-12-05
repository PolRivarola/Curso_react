
import './App.css';
import Header from './components/Header/Header.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart'
import { ProductsProvider } from './context/contextPelis';
//Es para acomodar las rutas


const App = () => {
  return(
    <BrowserRouter>
      <ProductsProvider>
      <Header />
      <Routes>
        <Route path="/" element= {<ItemListContainer greeting="Buenas peliculas, mejores precios"/>}/>
        <Route path="/category/:catID"  element= {<ItemListContainer greeting="Buenas peliculas, mejores precios"/>}/>     
        <Route path="/product/:itemID"  element= {<ItemDetailContainer/>}/>     
        <Route path="*"  element= {<h1>404 NOT FOUND</h1>}/>     
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </ProductsProvider>
    </BrowserRouter> 
  )
}

export default App;

// JSX -> JS + html -> JavaScript Xml