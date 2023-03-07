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
