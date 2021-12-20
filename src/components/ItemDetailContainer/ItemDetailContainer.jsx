import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetial";
import { usePelis } from "../../context/contextPelis";
import { useParams } from "react-router";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const ItemDetailContainer = () => {
  const [pelicula, setPelicula] = useState({});
  const { itemID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dataBase = getFirestore();
  const refe = doc(dataBase, "peliculas",itemID);
  const [pelis, setPelis] = useState([]);

  console.log(itemID);
  useEffect(() => {
    getDoc(refe)
      .then((snapShot) => {
        
          setPelicula({id:snapShot.id,...snapShot.data()})
        
        console.log(pelis)

        setIsLoading(false);
      })
  }, [itemID]);

  console.log(pelis);
  return (
    <div className="detail-wrap">
      <ItemDetail item={pelicula} />
    </div>
  );
};

export default ItemDetailContainer;
