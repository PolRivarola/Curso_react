

// const App = () => {

import { Component } from "react/cjs/react.development";

//     const[number,setNumber] = useState(0)
//     const onClick = ()=>{
//       setNumber(number + 1)
//     }
//     return(
//       <Fragment>
//         <h3>{`Boton tiene el numero ${number}`}</h3>
//         <button onClick={onClick}>{number}</button>
//       </Fragment> 
//     )
//   }
  
// console.log('soy el 1')
// setTimeout(()=>{
//   console.log('soy el 2')
// },2000)

// console.log('soy el 3')

// // resolve -> si se cumple pasa
// // reject -> si la promesa no se cumple
// const products = [
//   {
//     product1:'remera',
//     color:'rojo',
//     id:'001'
//   },
//   {
//     product1:'short',
//     color:'negro',
//     id:'002'
//   },
//   {
//     product1:'gorra',
//     color:'azul',
//     id:'003'
//   }
// ]

// const somethingWillHappen = ()=>{
//   return new Promise((resolve, reject) => {
    
//     if(true){
//       setTimeout(()=>{
//         resolve(products)
//       },3000)
//     }else{
//       reject('Oh no, lo hice mal')
//     }
//   })
// }

// // then --> todo ok
// // catch --> no ok
// somethingWillHappen()
//   .then((response) => console.log(response))
//   .then(()=> console.log('Cerrar el modal'))
//   .catch((error)=> console.log(error))

//CLASE API
// {
 
// import { Fragment, useEffect} from 'react';
// import { useState } from 'react/cjs/react.development';
// import './App.css';
// import Header from './components/Header/Header.jsx'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



// const App = () => {


//   const [characters, setCharacters] = useState()
//   const [isLoading,setIsLoading] = useState(false)

//   const item = 
//     [{
//     name: 'Iphone x',
//     color:'Clabk',
//     id:'001',
//     price:5000},
//     {name: 'Iphone x',
//     color:'Clabk',
//     id:'001',
//     price:5000}]

  

//     const traerItem = ()=> {
//       return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//           resolve(item)

//         },2000)
//       })
//     }


//   useEffect(()=>{
//     setIsLoading(true)
//     // fetch('https://swapi.dev/api/people/'  )
//     // .then((resp)=>resp.json())
//     // .then(
//     // (res)=>{ setCharacters(res.results)
//     // setIsLoading(false)}
//     // )
//     traerItem()
//     .then((res) =>{
//       setCharacters(res)
//       setIsLoading(false)
      
//     })
    
//   },[setIsLoading])

//   return(
//     <Fragment>
//       {/* <Header />
//       <ItemListContainer greeting="Buenas peliculas, mejores precios"/> */}
//       <h1>Swapi</h1>
      
//       {
//         isLoading
//         ? <h2>Loading...</h2>

//         :characters?.map((people,index)=>{
//           console.log(people)
//           return(
//             <h1 key={index}>{people.name}</h1>
//           )
//         })
//       }
//     </Fragment> 
//   )
// }

// }