import './contador.css'

function Contador({sumar, restar, agregarCarrito, cantidad}) {

    return (
        <div className='container-contador'>
            <div className="contador">
                <span>
                    <button onClick={restar}>-</button>
                </span>
                <span className='numerito-stock'>
                    <h3>{cantidad}</h3>
                </span>
                <span>
                    <button onClick={sumar}>+</button>
                </span>
            </div>
            <div className="agregar-carrito">
                <button onClick={agregarCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Contador;