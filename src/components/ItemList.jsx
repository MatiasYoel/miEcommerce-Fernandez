import Item from "./Item"
import React from "react"
const ItemList = ({data}) => {
return (
    <div>
        <div  className="main-catalogue">
        {data?.map((product) =>(
            <Item
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                category={product.category}
                image={product.image}
                description={product.description}
            />
        ))}
        </div>
    </div>
)
}

export default React.memo(ItemList)

