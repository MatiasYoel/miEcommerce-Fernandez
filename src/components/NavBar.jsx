import CartWidget from './CartWidget'; 
import { Button,Menu,MenuButton,MenuList,MenuItem,Box} from '@chakra-ui/react';
import {Link } from "react-router-dom"

const NavBar = () => {
return (
    <div className='nav'>
        <div className='tituloLogo'>
            <h3 className='titulo'><Link to={"/"}>Tu Pilcha</Link>  </h3>
            <img className='logo' src="../src/assets/percha.png" alt="logo" />
        </div>
        <Menu  className='categorias'>
            <MenuButton as={Button} className='categorias'>
            Categorias
            </MenuButton>
            <MenuList className="menu-list">
                <Link to={`/category/${"Hombre"}`}>
                    <MenuItem>Hombre</MenuItem>
                </Link>
                <Link to={`/category/${"Mujer"}`}>
                    <MenuItem>Mujer</MenuItem>
                </Link>
                <Link to={`/category/${"Infantil"}`}>
                    <MenuItem>Infantil</MenuItem>
                </Link>
            </MenuList>
        </Menu>
        <Menu>
            <Link to={"/catalogue"}>
                <MenuButton
                    as={Button}
                    className='categorias'
                >
                Catálogo
                </MenuButton>
            </Link>
            </Menu>
        <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </Box>
    </div>
)
}

export default NavBar
