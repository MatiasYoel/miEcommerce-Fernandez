import ItemDetail from "./ItemDetail"
import datos from "../productos.json"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [products, setProduct] = useState([]);
    const {id} = useParams();
    const getDatos = new Promise((resolve,reject) => {
            if (datos.length === 0) {
                reject (new Error ("No Hay Datos"));
            }
            else{
                resolve(datos)
            }
        });
    
    useEffect(() => {
        getDatos.then((res) => {
            id
            ? setProduct(res.filter((item)=>item.id === id))
            : setProduct (res)
        })       
    
    .catch((err)=> console.log(err));
}, [id]);
console.log(products)
  return (
    <div>
      <ItemDetail products={products}/>
    </div>
  )
}


export default ItemDetailContainer

/*
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
*/