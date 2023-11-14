import React, { useContext, useState } from 'react'
import './detalles.css'
import Contador from '../contador/Contador'
import { CartContext } from '../../context/CartContext'

const DetallesProducto = ({ item }) => {

  const { carrito, agregarCarrito  } = useContext(CartContext);

  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }
  const restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  

  return (
    <div className="fondo-detalles">
      {item && <div className='detalles'>
        <div className='presentacion-container'>
          <h2>{item.nombre}</h2>
          <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="detalles-container">
          <h3>Informacion</h3>
          <p> El equipo cuenta con un almacenamiento de {item.memoria} </p>
          <p> Tiene un valor de ${item.precio}usd </p>
          <p> Y contamos con un stock de {item.stock} equipos.</p>
          <Contador
            sumar={sumar}
            restar={restar}
            cantidad={cantidad}
            agregarCarrito={() => { agregarCarrito(item, cantidad)}}
          />
        </div>
      </div>}
    </div>
  )
}

export default DetallesProducto