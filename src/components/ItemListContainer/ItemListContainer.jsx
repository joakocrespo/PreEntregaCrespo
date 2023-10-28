import './ItemListContainer.css'
import data from '../../data/stockEquipos.json'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria;

    const pedirProductos = () => {
        return new Promise((resolve) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                    if(categoria) {
                        setProductos( res.filter((prod) => prod.categoria === categoria) );
                    }else{
                        setProductos(res);
                    }
            })
    }, [categoria])



    return (
        <div className='itemlistcontainer'>
            <ItemList productos={productos} />
        </div>
    )
}