import CartWidget from './CartWidget'; 
import { Button,Menu,MenuButton,MenuList,Image,MenuItem} from '@chakra-ui/react';

const NavBar = () => {
return (
    <div className='nav'>
        <Menu  className='categorias'>
            <MenuButton as={Button} className='categorias'>
            Categorias
            </MenuButton>
            <MenuList>
                <MenuItem minH='48px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/100/100'
                    alt='Fluffybuns the destroyer'
                    mr='12px'
                />
                <span>Hombre</span>
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
                </MenuItem>
            </MenuList>
        </Menu>
        <div className='tituloLogo'>
            <h3 className='titulo'>Tu Pilcha</h3>
                <img className='logo' src="../src/assets/percha.png" alt="logo" />   
        </div>
        
        <CartWidget/>
    </div>
)
}

export default NavBar
