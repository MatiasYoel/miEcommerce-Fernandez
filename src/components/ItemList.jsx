import Item from "./Item"
import { Container } from "@chakra-ui/react"

const ItemList = ({datos}) => {
return (
    <div>
        <Container className="main-catalogue">
        {datos?.map((productos) =>(
            <Item
                key={productos.id}
                id={productos.id}
                name={productos.name}
                price={productos.price}
                stock={productos.stock}
                category={productos.category}
                image={productos.image}
            />
        ))}
        </Container>
    </div>
)
}

export default ItemList
