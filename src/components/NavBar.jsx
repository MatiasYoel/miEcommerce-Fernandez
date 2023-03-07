import CartWidget from './CartWidget'; 
import { Button,Menu,MenuButton,MenuList,Image,MenuItem,Box} from '@chakra-ui/react';
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
                Catalogo
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
/*<MenuList>
                <MenuItem minH='48px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/100/100'
                    alt='Fluffybuns the destroyer'
                    mr='12px'
                />
                <span>Hombre</span>
                <Link to={`/category/${"Hombre"}`}></Link>
                </MenuItem>
                <MenuItem minH='40px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/120/120'
                    alt='Simon the pensive'
                    mr='12px'
                />
                <span>Mujer</span>
                <Link to={`/category/${"Mujer"}`}></Link>
                </MenuItem>
                <MenuItem minH='40px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/100/105'
                    alt='Simon the pensive'
                    mr='12px'
                />
                <span>Infantil</span>
                <Link to={`/category/${"Infantil"}`}></Link>
                </MenuItem>
            </MenuList>*/