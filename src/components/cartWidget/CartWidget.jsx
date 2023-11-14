import './cartWidget.css'
import { Link } from 'react-router-dom'
import logoCarrito from './assets/logo-carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext    )

  return (
    <div>
        <Link className='btn-carrito' to='/carrito'>
            <img src={logoCarrito} alt="Logo Carrito" />
            <p className='numerito'>{cantidadEnCarrito()}</p>
            </Link>
    </div>
  )
}

export default CartWidget