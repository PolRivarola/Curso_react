
import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/itemListContainer.jsx'

const App = () => {
  return(
    <Fragment>
      <Header />
      <ItemListContainer greeting="Una nueva forma de estudiar"/>
    </Fragment>
  )
}

export default App;

// JSX -> JS + html -> JavaScript Xml