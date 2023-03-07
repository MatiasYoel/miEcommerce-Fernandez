import ItemList from "./ItemList"
import datos from "../productos.json"
import { useParams } from "react-router-dom"


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
return (
    <div >
        {category? <ItemList datos={catFilter}/> : <ItemList datos={datos}/>}
    </div>
)
}

export default ItemListContainer
