import { useCartContext } from '../context/CartContext'

const cartWidget = () => {
    const {totalProducts} = useCartContext();
return (
    <div>
        <div className="cartWidget">
            <span className="material-symbols-outlined">shopping_basket</span>
            <p>{totalProducts()||''}</p>
        </div>
        
    </div>
)
}

export default cartWidget
