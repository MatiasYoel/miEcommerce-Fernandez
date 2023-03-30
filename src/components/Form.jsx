import {collection,addDoc,getFirestore} from "firebase/firestore"
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link} from "react-router-dom";

const Form = () => {
  const {cart,totalPrice,clearCart} = useCartContext()
    const [ordenId,setOrdenId]=useState(null);
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("")
    const [celular,setCelular] = useState("")
    const db= getFirestore();
    const handleSubmit = (e) =>{
      e.preventDefault();
      addDoc(ordenCollection,orden).then(({id}) =>setOrdenId(id) );
    }

    const orden = {
      userName,
      celular,
      email,
      items: cart.map(product =>({id:product.id, name: product.name, price: product.price,quantity: product.quantity})),
      total: (totalPrice()).toFixed(3)
    };

    const ordenCollection = collection(db,"Orden");

      return (
    <div>
      <div className="form">
      <section className="form-contact">
        <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit} action="" className="contact" method="POST">
          <label for="nombreApellido">Nombre y Apellido</label>
          <input type="text" name="nombreApellido" id="nombreApellido" onChange={(e) =>setUserName(e.target.value)}/>
          <label for="celular">Celular</label>
          <input type="number" name="celular" id="celular"onChange={(e) =>setCelular(e.target.value)}/>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e) =>setEmail(e.target.value)}/>
          <button type="submit" className="buttonCompra">Enviar</button>
      </form>
      </section>
      <p>Número de Pedido: {ordenId}</p>
      <Link to='/' onClick={clearCart} className="buttonCompra terminarCompra">Volver al Inicio</Link>
      </div>
      
    </div>
  )
}

export default Form
/*
<form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Nombre y Apellido" onChange={(e) =>setUser(e.target.value)}/>
        <input type="number" placeholder="Celular" onChange={(e) =>setCelular(e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e) =>setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
      */