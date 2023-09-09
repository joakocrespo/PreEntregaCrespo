import './header.css'
import logo from './assets/logo-apple.png'
import carrito from './assets/logo-carrito.png'
import logoMenu from './assets/logo-menu.png'
import logoCerrar from './assets/logo-cerrar.png'
import { useState } from 'react'

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
                <a href="#" className='title-navbar'>iShop</a>
            </li>
            <button id='abrir' onClick={abrir} className='abrir-menu'> <img src={logoMenu} alt="Logo Menu" /> </button>
            <nav className={`nav ${menuMobile ? 'visible' : ''}`} >

                <button id='cerrar' onClick={cerrar} className='cerrar-menu'><img src={logoCerrar} alt="Logo Cerrar" /></button>
                <ul className='nav-list'>
                    <li>
                        <a href="#">Equipos</a>
                    </li>
                    <li>
                        <a href="#">iPhones</a>
                    </li>
                    <li>
                        <a href="#">iPads</a>
                    </li>
                    <li>
                        <a href="#">Apple-Watchs</a>
                    </li>
                    <li>
                        <a href="#" className='carrito'><img src={carrito} alt="" /><p>0</p></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}