import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Welcome from "./components/Welcome"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import CartProvider from './context/CartContext';
import Form from "./components/Form"

const App = () => {
return (
  <BrowserRouter>
    <ChakraProvider>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Welcome />}/>
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
      </CartProvider>
      
    </ChakraProvider> 
  </BrowserRouter>
      
  )
}

export default App

