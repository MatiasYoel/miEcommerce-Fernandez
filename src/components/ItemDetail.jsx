/*import { Center,Card,CardBody,Image,Stack,Heading,Text,CardFooter,Divider,} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import data from "../productos.json"
const ItemDetail = ({datos}) => {
    const {id} =useParams();
    const [setProducto] = useState([]);
    useEffect(()=>{
        const db = data();
        const prodRef = data(db,`${id}`);
        getData(prodRef).then((snapshot)=>{
            if (snapshot.exist()) {
                setProducto(snapshot.data())
            }else{
                console.log("Error")
            }
        }
        )
    },[]);
    const prodFilter = datos.filter((productos) => productos.id == id);
return (
    <>
    {prodFilter.map((productos) => (
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
                        <Text color="red.600" fontSize="xl">
                        Stock: {productos.stock}
                        </Text>
                        <Text color="green.600" fontSize="xl">
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
)
}

export default ItemDetail*/
import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
    Divider,
    Button,
    Center,
    Flex,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
const ItemDetail = ({data}) => {
    const { id } = useParams();

    const dataFilter = data.filter((productos) => productos.id == id);
return (
    <div>
    <>
    {dataFilter.map((productos) => (
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
