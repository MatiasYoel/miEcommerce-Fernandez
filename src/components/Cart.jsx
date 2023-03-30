import { useCartContext } from '../context/CartContext'
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";
import Form from './Form';

const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  if (cart.length === 0) {
    return(
      <>
        <div className='carrito'>
          <p className='bienvenida'>El Carrito está Vacío</p>
          <Link to='/catalogue' className='buttonCompra'>Ir a Comprar</Link>
        </div>
      </>
    )
  }
  return (
    <div className='carrito'>
      <div>
        {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p className="titlePrice">
        Total: ${(totalPrice()).toFixed(3)}
      </p>
      <Form/>
      
        </div>
      
    </div>
  )
}

export default Cart
