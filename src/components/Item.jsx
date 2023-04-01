import React from "react";
import {Card,CardBody,Image,Heading,Text,Stack,CardFooter,Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Item = ({ id, name, stock, price, image, description }) => {
  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className="cardProd"
>
  <Image
    objectFit='cover'
    src={image}
    alt='Image Product'
    className="imageProduct"
  />

  <Stack>
    <CardBody className="bodyItem">
      <Heading size='md' className="titulo">{name}</Heading>
      <Text py='2' className="subTitleProducto">
      ${price},00
      </Text>
      <Text py='2' className="contenidoProductos">
      Stock: {stock}
      </Text>
      <Button as={Button} className='categorias bodyItem'>
      <Link to={`/item/${id}`}>Detalles</Link>
      </Button>
    </CardBody>

    <CardFooter>
      
    </CardFooter>
  </Stack>
</Card>
  );
};

export default Item