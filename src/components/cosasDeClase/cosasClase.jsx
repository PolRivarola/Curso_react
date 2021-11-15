

// const App = () => {

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

// then --> todo ok
// catch --> no ok
somethingWillHappen()
  .then((response) => console.log(response))
  .then(()=> console.log('Cerrar el modal'))
  .catch((error)=> console.log(error))