import { useState, useEffect } from 'react';
import data from '../../data/stockEquipos.json'
import DetallesProducto from './DetallesProducto';
import { useParams } from 'react-router-dom';

const DetallesContainer = () => {

    const pedirItemPorId = (id) => {
        return new Promise ((resolve, rejected) => {
            
            const item = data.find((el) => el.id === id);

            if(item) {
                resolve(item)
            }else{
                rejected({
                    error: "No se encontró el equipo."
                })
            }

        })
    }

    const [item, setItem] = useState(null);
    const id = useParams().id;


    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setTimeout(() => {
                    setItem(res);
                }, 500);
            })
    }, [id])
    

  return (
    <div>
        <DetallesProducto item={item} />
    </div>
  )
}

export default DetallesContainer