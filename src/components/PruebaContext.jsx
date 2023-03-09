import { useContext } from "react"
import {CarritoContext} from "../context/CartContext"
const PruebaContext = () => {
    const {cart,setCart} = useContext(CarritoContext);
    console.log(cart)
  return (
    <div>
      {cart}
    </div>
  )
}

export default PruebaContext
