import ItemDetail from "./ItemDetail"
import datos from "../productos.json"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const getDatos = () => {
    return new Promise ((resolve,reject) => {
        if (datos.length === 0) {
            reject (new Error ("No Hay Datos"));
        }
        else{
            resolve(datos)
        }
    });
};
const [product, setProduct] = useState([]);
    
    useEffect(() => {
        getDatos().then((product) => setProduct (product));
    },[]
    )
    const { id } = useParams();

    const productFilter = product.filter((productos) => productos.id == id);

  return (
    <div>
        {id? <ItemDetail product={productFilter}/> : <ItemDetail product={product}/>}
    </div>
  )
}


export default ItemDetailContainer
