import {
  useBorrarPeli,
  useCantidad,
  useCartPelis,
  useClearCarrito,
  useTotal,
} from "../../context/contextPelis";
import "./cart.css";
import { Link } from "react-router-dom";
import { useEffect, useState,useRef } from "react/cjs/react.development";
import { addDoc, collection,  getFirestore,doc,updateDoc } from "firebase/firestore";

export const Cart = () => {
  const borrarPeli = useBorrarPeli();
  const cartPelis = useCartPelis();
  const clearCarrito = useClearCarrito();
  const cantidad = useCantidad();
  const total = useTotal();
  const [infoOn, setInfoOn] = useState(false);
  const [infoCliente,setInfoCliente] = useState({email:"pop@",name:"pol",number:"12223"})
  const [compra,setCompra] = useState({})
  const dataBase = getFirestore() 
  const refCompra = collection(dataBase, "compras");
  const [enviar,setEnviar] = useState()
  const mountedRef = useRef(true) 


  const handleChange = (e) =>{
      setInfoCliente({...infoCliente, [e.target.name]: e.target.value})
    }

    

  const handleSubmit = () =>{
        addDoc(collection(dataBase,"compras"),compra)
        .then(({ id }) => {
            const refMod = doc(dataBase, "compras", id);
            updateDoc(refMod, { buyerId:id});
          })
          .finally(()=>{
            clearCarrito()
        })
  }

  useEffect(()=>{
    setCompra({infoCliente,cartPelis,date:new Date(),total})
  },[cartPelis])
  

    
   


  return (
    <div className="cart-wrap">
      {cartPelis?.map((item) => {
        return (
          <div
            className="peliCart"
            key={item.id}
            onClick={() => borrarPeli(item)}
          >
            <h2>{item.title}</h2>
            <h3>{item.price}$</h3>
            <h3>{`Cantidad: ${item.cartCount}`}</h3>
          </div>
        );
      })}
      {cartPelis.length > 0 ? (
        <div className="extraCart">
          <h2>{`Peliculas en carrito: ${cantidad}`}</h2>
          <h2>{`Total a pagar: ${total}$`}</h2>
          <button onClick={() => clearCarrito()}>{`Vaciar carrito`}</button>
          <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Comprar
      </button>
        </div>
      ) : (
        <div className="noPelis">
          <h1>
            {`No hay pelis, pero puedes encontrarlas fabulosas opciones`}{" "}
          </h1>
          <Link className="aqui" to="/">
            <h1>Aqui!</h1>
          </Link>
          
        </div>
        
      )}

    </div>
  );
};


      
      /* {infoOn?
        <div className="formCompra">
            
          <label>
            Nombre:
            <input name="username" onChange={handleChange}  />
          </label>
          
          <label>
            Numero de telefono:
            <input type={"number"} name="numero" onChange={handleChange} />
          </label>
          <label>
            Email:
            <input name="email" type={"email"} onChange={handleChange}/>
          </label>
          
          <button onClick={handleSubmit}>Enviar</button>
          
        </div>:<></>
      } */