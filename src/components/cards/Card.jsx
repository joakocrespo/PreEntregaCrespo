import './card.css'
import equipo from './assets/iphone13-pro-main.jpg'

export const Card = (p)=>{

    return (
        <div className='card'>
            <img src={equipo} alt=""/>
            <h2>{p.equipo}</h2>
            <p>Memoria: {p.memoria}</p>
            <p>Color: {p.color}</p>
            <p>Precio: {p.precio}</p>
        </div>
    )

}