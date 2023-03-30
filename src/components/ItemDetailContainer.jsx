import ItemDetail from "./ItemDetail"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    const db =getFirestore();
    const Doc = doc(db,"indumentaria", id)
    getDoc(Doc)
      .then(result => setData({id:result.id, ...result.data()}))

    
  },[id])
  
  return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}
export default ItemDetailContainer