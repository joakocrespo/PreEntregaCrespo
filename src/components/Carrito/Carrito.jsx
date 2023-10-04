import './carrito.css'
import carrito from './assets/logo-carrito.png'

function Carrito() {
    return (
        <li>
            <a href="#" className='carrito'><img src={carrito} alt="" /><p>0</p></a>
        </li>
    );
}

export default Carrito;
