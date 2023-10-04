import { useState } from 'react';
import './contador.css'

function Contador({item}) {

    const [numeritoStock, setnumeritoStock] = useState(0)

    const sumar = () => setnumeritoStock(numeritoStock + 1)
    const restar = () => setnumeritoStock(numeritoStock - 1)

    return (
        <div className='container-contador'>
            <div className="contador">
                <span>
                    {numeritoStock <= 0 ? <button disabled>-</button> : <button onClick={restar}>-</button>}
                </span>
                <span className='numerito-stock'>
                    <h3>{numeritoStock}</h3>
                </span>
                <span>
                    { numeritoStock < item.stock ? <button onClick={sumar}>+</button> : <button disabled>+</button>}
                </span>
            </div>
            <div className="agregar-carrito">
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Contador;