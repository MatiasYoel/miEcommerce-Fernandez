
import React from "react";
import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, name, stock, category, image }) => {
  return (
    <div>
    <div key={id}>
      <Center p="1rem">
        <Card className="card-main">
          <CardBody>
            <Image borderRadius="lg" src={image} />
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>

              <Text color="blue.800" fontSize="l">
                Category: {category}
              </Text>
              <Text color="green.700" fontSize="l">
                Stock: {stock}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="card-footer">
            <Center className="btn-center flex">
              <Button as={Button} className='categorias'>
                <Link to={`/item/${id}`}>Detalles</Link>
              </Button>
            </Center>
          </CardFooter>
        </Card>
      </Center>
    </div>
  </div>
  );
};

export default Item
/* Futura Card
<div>
  <div className="card">
    <div className="imgBg">
      <div className="contenido">
        <div className="box1">
          <div>
            <h4 className="titulo">{name}</h4>
            <p>Category: {category}</p>
          </div>
          <div>
            <p>Stock: {stock}</p>
          </div>
        </div>
        <div className="box2">
          <Button as={Button} className='categorias'>
            <Link to={`/item/${id}`}>Detalles</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>*/  