import { useEffect } from "react";
import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const Products = React.createContext();

export function ProductsProvider({ children }) {
  const [cartPelis, setCartPelis] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [irAlCart, setIrAlCart] = useState(false);
  const [total, setTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const dataBase = getFirestore();
  const refCart = collection(dataBase, "cartPelis");

  const isOnCart = (product) => {
    return cartPelis?.findIndex((item) => item.id === product.id);
  };

  const clearCarrito = () => {
    cartPelis.map((producto) => {
      const refClear = cartPelis.find((item) => item.id === producto.id);
      const pro = doc(dataBase, "cartPelis", refClear.Cartid);
      deleteDoc(pro);
    });
    setCartPelis([]);
    setCantidad(0);
    setTotal(0);
  };

  const getcartPelis = () => {
    getDocs(refCart).then((snapShot) => {
      setCartPelis(
        snapShot.docs.map((peli) => ({ id: peli.id, ...peli.data() }))
      );
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getDocs(refCart).then((snapShot) => {
      setCartPelis(
        snapShot.docs.map((peli) => ({ id: peli.id, ...peli.data() }))
      );
      let totInit = 0;
      let cantInit = 0;
      snapShot.docs.map((peli) => {
        cantInit += peli.data().cartCount;
        totInit += peli.data().cartCount * peli.data().price;
      });
      setCantidad(cantInit);
      setTotal(totInit);
      setIsLoading(false);
    });
  }, []);

  const addToCart = (product, number) => {
    if (isOnCart(product) === -1) {
      addDoc(refCart, product)
        .then(({ id }) => {
          const refMod = doc(dataBase, "cartPelis", id);
          updateDoc(refMod, { Cartid: id, cartCount: number });
        })
        .then(() => {
          getcartPelis();
        });
      setCantidad(cantidad + number);
      setTotal(total + product.price * number);
      setIrAlCart(true);
      setTimeout(() => {
        setIrAlCart(false);
      }, 3000);
    } else {
      if (
        cartPelis[isOnCart(product)].cartCount + number <=
        cartPelis[isOnCart(product)].stock
      ) {
        const refFind = cartPelis.find((item) => item.id === product.id);
        const pro = doc(dataBase, "cartPelis", refFind.Cartid);
        updateDoc(pro, { cartCount: refFind.cartCount + number })
          .then(() => {
            getcartPelis();
          })
          .finally(() => {
            setCantidad(number + cantidad);
            setTotal(total + number * refFind.price);
          });

        setIrAlCart(true);
        setTimeout(() => {
          setIrAlCart(false);
        }, 3000);
      } else {
        alert(
          "Estas intentando poner mas unidades de este producto de las que hay disponibles!"
        );
      }
    }
  };

  const borrarPeli = (product) => {
    const refFind = cartPelis.find((item) => item.id === product.id);
    const pro = doc(dataBase, "cartPelis", refFind.Cartid);
    deleteDoc(pro);
    setCartPelis(cartPelis.filter((item) => item.id !== product.id));

    setCantidad(cantidad - product.cartCount);
    setTotal(total - product.cartCount * product.price);
  };

  return (
    <Products.Provider
      value={{
        addToCart,
        cartPelis,
        borrarPeli,
        cantidad,
        clearCarrito,
        irAlCart,
        total,

        isLoading,
      }}
    >
      {children}
    </Products.Provider>
  );
}
export function useAddToCart() {
  return useContext(Products).addToCart;
}

export function useCartPelis() {
  return useContext(Products).cartPelis;
}

export function useBorrarPeli() {
  return useContext(Products).borrarPeli;
}

export function useCantidad() {
  return useContext(Products).cantidad;
}

export function usePelis() {
  return useContext(Products).pelis;
}

export function useClearCarrito() {
  return useContext(Products).clearCarrito;
}

export function useTotal() {
  return useContext(Products).total;
}

export function useIsLoading() {
  return useContext(Products).isLoading;
}

export function useIrAlCart() {
  return useContext(Products).irAlCart;
}

export default Products;
