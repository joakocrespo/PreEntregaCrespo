
import { Card } from '../cards/Card'
import './ItemListContainer.css'


export const ItemListContainer = (p) => {
    return (
        <div className='main'>
            <div className='itemlistcontainer'>
                <h2 className='titulo'>{p.greeting}</h2>
                <Card equipo="iPhone X" memoria="128gb" color="Blanco" precio="$300" />
                <Card equipo="iPhone 11" memoria="256gb" color="Rojo" precio="$400" />
                <Card equipo="iPhone 12" memoria="128gb" color="Azul" precio="$470" />
                <Card equipo="iPhone 12 Pro" memoria="256gb" color="Verde" precio="$560" />
                <Card equipo="iPhone 13" memoria="256gb" color="Gris" precio="$610" />
                <Card equipo="iPhone 13 Pro" memoria="512gb" color="Blanco" precio="$700" />
            </div>
        </div>
    )
}