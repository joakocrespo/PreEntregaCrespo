import './footer.css'
import logo from './assets/logo-apple.png'
import Carrito from '../Carrito/Carrito'

function Footer() {


    return ( 
        <>
        <footer>
            <li className='logo-title'>
                <img src={logo} alt='logo' />
                <a href="#" className='title-navbar'>iShop</a>
            </li>
            <nav>
                <ul className='nav-footer'>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <Carrito />
                </ul>
            </nav>
        </footer>
        </>
     );
}

export default Footer;