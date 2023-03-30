import { useCartContext } from '../context/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
return (
    <div className='itemCart'>
        <img src={product.image} alt={product.name} />
        <div>
            <p className="subTitleProducto">{product.name}</p>
            <p className="contenidoProductos">Cantidad: {product.quantity}</p>
            <p className="contenidoProductos">Precio Unitario: {product.price}</p>
            <p className="contenidoProductos">SubTotal: ${(product.quantity*product.price).toFixed(3)}</p>
            <button className='buttonCount' onClick={() => removeProduct(product.id)}>Eliminar Producto</button>
        </div>
    </div>
)
}

export default ItemCart
