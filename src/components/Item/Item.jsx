import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({producto})=>{

    return (
        <div className='item'>
                <img src={producto.imagen} alt="" />
                <h2>{producto.nombre}</h2>
                <p>Memoria: {producto.memoria}</p>
                <p>Stock: {producto.stock} Unidades</p>
                <p>Precio: ${producto.precio}</p>
                <Link className='btn' to={`/item/${producto.id}`}>Ver más</Link>
            </div>
    )

}
