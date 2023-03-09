import Item from "./Item"
import { Container } from "@chakra-ui/react"

const ItemList = ({products}) => {
return (
    <div>
        <Container className="main-catalogue">
        {products?.map((productos) =>(
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
