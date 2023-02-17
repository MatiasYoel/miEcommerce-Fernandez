import { useState } from 'react';
const itemCount = () => {
const [cantidad, setCantidad] = useState(0);

return (
    <>
        <h1>Cantidad Seleccionada</h1>
        <h2>{cantidad}</h2>
        <button onClick={() => setCantidad(cantidad + 1)}>Agregar</button>
        <button onClick={() => setCantidad(cantidad - 1)}>Quitar</button>
        <button onClick={() => setCantidad(0)}>Reiniciar</button>
    </>
);
};

export default ItemCount;
