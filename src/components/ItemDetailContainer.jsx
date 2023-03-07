/*import ItemDetail from "./ItemDetail";
import datos from "../productos.json"

const ItemDetailContainer = () => {const getDatos = () => {
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

  return (
    <div>
      <ItemDetail datos={datos} />
    </div>
  )
}

export default ItemDetailContainer*/
import ItemDetail from "./ItemDetail"
import datos from "../productos.json"

const ItemDetailContainer = () => {
  return (
    <div>
       <ItemDetail data={datos}/>
    </div>
  )
}


export default ItemDetailContainer
