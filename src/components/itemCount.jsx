import { useState,useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const ItemCount = ({initial,stock,onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const increase = () =>{
        setCount(count + 1)
    }
    const decrease = () =>{
        setCount(count - 1)
    }
    useEffect(() =>{
        setCount(parseInt(initial))
    },[initial])

return (
    <>
        <div className='cantidad'>
            <button  className='buttonCount' disabled={count<= 1} onClick={decrease}>Quitar</button>
            <h2 className='count'>{count}</h2>
            <button className='buttonCount' disabled={count >= stock} onClick={increase}>Agregar</button>
            <Button as={Button} className='buttonCount' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </div>
    </>
);
};

export default ItemCount;
