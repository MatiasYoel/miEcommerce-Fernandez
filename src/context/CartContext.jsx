import React, {useContext,useState} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider= ({children}) => {
    
    const [cart,setCart] = useState([]);

    const addProduct = (item,quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity +quantity} : product
            }))
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const totalProducts = () => cart.reduce((previousProducts,actualProducts) => previousProducts + actualProducts.quantity,0);

    const totalPrice = () =>{
        return cart.reduce((previousPrice,actualPrice) => previousPrice + actualPrice.quantity*actualPrice.price,0);
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id)? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

return (
    <CartContext.Provider value={{totalPrice,totalProducts,clearCart,isInCart,removeProduct,addProduct,cart}}>
        {children}
    </CartContext.Provider>
)
};

export default CartProvider 
