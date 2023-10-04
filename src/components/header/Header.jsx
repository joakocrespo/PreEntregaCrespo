import './header.css'
import logo from './assets/logo-apple.png'
import logoMenu from './assets/logo-menu.png'
import logoCerrar from './assets/logo-cerrar.png'
import { useState } from 'react'
import Carrito from '../Carrito/Carrito'
import { Link } from 'react-router-dom'

export const Header = () => {

    const [menuMobile, setmenuMobile] = useState(false);

    const abrir = () => {
        setmenuMobile(true);
    }
    
    const cerrar = () => {
        setmenuMobile(false);
    }


    return (
        <header>
            <li className='logo-title'>
                <img src={logo} alt='logo' />
                <Link to="/" className='title-navbar'>iShop</Link>
            </li>
            <button id='abrir' onClick={abrir} className='abrir-menu'> <img src={logoMenu} alt="Logo Menu" /> </button>
            <nav className={`nav ${menuMobile ? 'visible' : ''}`} >

                <button id='cerrar' onClick={cerrar} className='cerrar-menu'><img src={logoCerrar} alt="Logo Cerrar" /></button>
                <ul className='nav-list'>
                    <li>
                        <Link to="/">Equipos</Link>
                    </li>
                    <li>
                        <Link to="/productos/iPhone">iPhone</Link>
                    </li>
                    <li>
                        <Link to="/productos/Mac">Mac</Link>
                    </li>
                    <li>
                        <Link to="/productos/iPad">iPad</Link>
                    </li>
                    <li>
                        <Link to="/productos/Watch">Watch</Link>
                    </li>
                    <Carrito />
                </ul>
            </nav>
        </header>
    )
}