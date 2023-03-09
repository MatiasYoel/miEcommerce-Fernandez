import {Card,CardBody,CardFooter,Heading,Image,Stack,Text,Divider,Button,Center,Flex,} from "@chakra-ui/react";
import ItemCount from "./ItemCount"; 
const ItemDetail = ({product}) => {
    
return (
    <div>
    <>
    {product.map((productos) => (
        <div key={productos.id}>
            <Center p="1rem">
                <Card className="card-main">
                <CardBody>
                    <Image borderRadius="lg" src={productos.image} />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{productos.name}</Heading>
                        <Text color="blue.800" fontSize="l">
                        Descripcion: {productos.description}
                        </Text>
                        <Text color="blue.800" fontSize="l">
                        Categoria: {productos.category}
                        </Text>
                        <Text color="green.600" fontSize="xl">
                        Stock: {productos.stock}
                        </Text>
                        <Text color="black.600" fontSize="xl">
                        Precio:$ {productos.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                    <ItemCount
                        stock={productos.stock}
                        id={productos.id}
                        price={productos.price}
                        name={productos.name}
                    />
                </CardFooter>
            </Card>
        </Center>
    </div>
    ))}
    </>
    </div>
)
}

export default ItemDetail

/*
const ItemDetail = ({data}) => {
    const { id } = useParams();

    const dataFilter = data.filter((productos) => productos.id == id);
    */