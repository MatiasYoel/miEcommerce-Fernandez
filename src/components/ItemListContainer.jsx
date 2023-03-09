import ItemList from "./ItemList"
import datos from "../productos.json"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemListContainer = () => {
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

    const {category} = useParams();
    const catFilter =product.filter((productos)=>productos.category===category);
return (
    <div >
        {category? <ItemList product={catFilter}/> : <ItemList product={product}/>}
    </div>
)
}

export default ItemListContainer
/*
const ItemListContainer = () => {
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
    async function fetchingDato(){
        try {
            const datosFetched = await getDatos ();
            console.log(datosFetched)
        }catch (err){
            console.log(er)
        }
    };
    fetchingDato();
    const {category} = useParams();
    const catFilter =datos.filter((productos)=>productos.category===category);
    */