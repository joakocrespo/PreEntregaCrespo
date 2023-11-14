import { useState, useEffect } from 'react';
import data from '../../data/stockEquipos.json'
import DetallesProducto from './DetallesProducto';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config';

const DetallesContainer = () => {


    const [item, setItem] = useState(null);
    const id = useParams().id;


    useEffect(() => {

        const docRef = doc(db, "stockList", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    {...resp.data(), id: resp.id }
                )
            })

    }, [id])


    return (
        <div>
            <DetallesProducto item={item} />
        </div>
    )
}

export default DetallesContainer