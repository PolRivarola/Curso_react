
import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'



const App = () => {

  const[number,setNumber] = useState(0)
  const onClick = ()=>{
    setNumber(number + 1)
  }
  return(
    <Fragment>
      <Header />
      <ItemListContainer greeting="Una nueva forma de estudiar"/>
    <h3>{`Boton tiene el numero ${number}`}</h3>
    <button onClick={onClick}>{number}</button>
    </Fragment> 
  )
}

export default App;

// JSX -> JS + html -> JavaScript Xml