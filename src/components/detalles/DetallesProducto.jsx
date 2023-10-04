import React from 'react'
import './detalles.css'
import Contador from '../contador/Contador'

const DetallesProducto = ( {item} ) => {



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
          <Contador item= {item}/>
        </div>
      </div>}
    </div>
  )
}

export default DetallesProducto