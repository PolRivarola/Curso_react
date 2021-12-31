import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetial";
import { useParams } from "react-router";
import { getFirestore, getDoc, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [pelicula, setPelicula] = useState({});
  const { itemID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dataBase = getFirestore();
  const refe = doc(dataBase, "peliculas", itemID);
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    getDoc(refe).then((snapShot) => {
      setPelicula({ id: snapShot.id, ...snapShot.data() });

      setIsLoading(false);
    });
  }, [itemID]);

  return (
    <div className="detail-wrap">
      <ItemDetail item={pelicula} />
    </div>
  );
};

export default ItemDetailContainer;
