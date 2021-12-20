

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

const condition = true
  
  // if(condition){
  //   return(
  //     <h1>True</h1>
  //   )
  // }
  // return(
  //   <h1>False</h1>
  // )

  // return(
  //   <>
  //   {condition && <h1>True</h1>}
  //   {!condition && <h1>False</h1>}

  //   </>
  // )

  // return(
  //   <>
  //   {condition ? <h1>Real</h1> : <h1>Not real</h1> }
  //   </>
  // )

//   const [text,setText] = useState(false)
//   const [style,setStyle] = useState('red')

//   return(
//     <>
//     {/* <button  
//       onClick={()=>setText(!text)} className={`${style}`}>
//       {text? 'soy true': 'soy False'}

//     </button> */}
//     {/* <button  
//       onClick={()=>setStyle('green')} className={`${style}`}>
//       Soy un boton

//     </button> */}

//     <button  
//       onClick={()=>setText(!text)} 
//       style={{color: text? 'red': 'green'}}>
//       Soy un boton

//     </button>
//     </>
//   )



// if (isOnCart(product) === -1) {
  //   const prodAux = {
  //     cartCount: number,
  //     category: product.category,
  //     description: product.description,
  //     id: product.id,
  //     imgUrl: product.imgUrl,
  //     price: product.price,
  //     stock: product.stock,
  //     title: product.title,
  //   };
  //   console.log(prodAux);
  //   setCartPelis([...cartPelis, prodAux]);
  //   setCantidad(cantidad + number);
  //   setTotal(total + product.price * number);
  //   setIrAlCart(true);
  //   setTimeout(() => {
  //     setIrAlCart(false);
  //   }, 3000);
  // } else {
  //   let cant = 0;
  //   let tot = 0;
  //   if (
  //     cartPelis[isOnCart(product)].cartCount + number <=
  //     cartPelis[isOnCart(product)].stock
  //   ) {
  //     cartPelis[isOnCart(product)].cartCount =
  //       cartPelis[isOnCart(product)].cartCount + number;
  //     setCantidad(cartPelis[isOnCart(product)].cartCount + number + cantidad);
  //     cartPelis.map((product) => {
  //       cant += product.cartCount;
  //       tot += product.cartCount * product.price;
  //       console.log(tot);
  //     });
  //     setCantidad(cant);
  //     setTotal(tot);
  //     setIrAlCart(true);
  //     setTimeout(() => {
  //       setIrAlCart(false);
  //     }, 3000);
  //   } else {
  //     alert(
  //       "Estas intentando poner mas unidades de este producto de las que hay disponibles!"
  //     );
  //   }
  // }