import React from "react";
import {Heading,Image,Text} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useCartContext } from '../context/CartContext'

const ItemDetail = ({data}) => {

    const {addProduct} = useCartContext()

    const onAdd = (quantity) =>{
        addProduct(data,quantity)
    }

return (
<div>
<>
<div key={data.id} className="contenedorProducto">
    <div className="img">
        <Image borderRadius="lg" src={data.image} className="imgProduct" />
    </div>
    <div>
        <Heading className="titleProducto">{data.name}</Heading>
        <Text className="titlePrice">
            ${data.price},00
        </Text>
        <Text className="subTitleProducto">
            Descripcion
        </Text>
        <Text className="contenidoProductos">
            {data.description}
        </Text>
        <Text className="subTitleProducto">
            Categoria
        </Text>
        <Text className="contenidoProductos">
            {data.category}
        </Text>
        <Text className="contenidoProductos">
            Stock: {data.stock} unidades
        </Text>
        <Text className="subTitleProducto">
            Cantidad
        </Text>
        <div className="cantidad">  
        <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>

        </div>
    </div>
</div>
</>
</div>
)
}

export default React.memo(ItemDetail)