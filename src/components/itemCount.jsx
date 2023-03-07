import { useState } from 'react';
import { Button } from '@chakra-ui/react';
const ItemCount = () => {
const [cantidad, setCantidad] = useState(0);

return (
    <>
        <div>
            <h1>Cantidad </h1>
        </div>
        <div className='cantidad'>
            <Button as={Button} className='categorias' onClick={() => setCantidad(cantidad + 1)}>Agregar</Button>
            <h2>{cantidad}</h2>
            <Button as={Button} className='categorias' onClick={() => setCantidad(cantidad - 1)}>Quitar</Button>
        </div>
        <div>
            <Button as={Button} className='categorias' onClick={() => setCantidad(0)}>Reiniciar</Button>
        </div>
    </>
);
};

export default ItemCount;
