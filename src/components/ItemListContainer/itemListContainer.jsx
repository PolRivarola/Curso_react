import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState } from "react/cjs/react.development";
import { useParams } from "react-router";
import { useEffect } from "react";
import { usePelis, useIsLoading } from "../../context/contextPelis";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  let { catID } = useParams();
  const [pelis, setPelis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dataBase = getFirestore();
  const ref = collection(dataBase, "peliculas");
  useEffect(() => {

    const pelisShow = catID? query(ref,where("category","==",catID))
                      :ref

    getDocs(pelisShow)

      .then((snapShot) => {
        setPelis(
          snapShot.docs.map((peli) => ({ id: peli.id, ...peli.data() }))
        );
        
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [catID]);
  console.log(pelis)

  return (
    <section className="ilc-wrap">
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <h2 className="greet">{props.greeting}</h2>
          <ItemList items={pelis} />
        </>
      )}
    </section>
  );
};


export default ItemListContainer;
