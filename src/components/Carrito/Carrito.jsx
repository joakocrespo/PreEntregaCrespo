import React from 'react'
import './carrito.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, precioTotalEntero, vaciarCarrito } = useContext(CartContext);

    const eliminarCarrito = () => {
        vaciarCarrito();
    }

    return (
        <div>
            <div className="fondo-detalles-carrito">
                <div className='detalles-carrito'>
                    <div className='presentacion-container-carrito'>
                        <h2>Carrito</h2>
                    </div>
                    <div className="detalles-container-carrito">
                        {
                            carrito.map((prod) =>
                                <>
                                    <div className='detalles-prod' key={prod.id}>
                                        <div>
                                            <img className='img-carrito' src={prod.imagen} alt="" />
                                        </div>
                                        <div>
                                            <h4>{prod.nombre}</h4>
                                            <p>Cantidad: {prod.cantidad}</p>
                                            <p>Precio: ${prod.precio}</p>
                                            <p>Precio Total: ${prod.precio * prod.cantidad} </p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {carrito.length > 0 ?
                            <>
                                <div>
                                    <h3>Precio Total: ${precioTotalEntero}</h3>
                                </div>
                                <div>
                                    <button onClick={eliminarCarrito}>Vaciar Carrito</button>
                                    <Link to="/checkout">Finalizar Compra</Link>
                                </div>
                            </> :
                            <div className='empty-cart'>
                                <h3>
                                    El carrito está vacio
                                </h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito