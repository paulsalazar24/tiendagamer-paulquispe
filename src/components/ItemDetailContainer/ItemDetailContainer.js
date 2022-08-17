import React, { useEffect, useState } from 'react'
import { getDetalleProducto } from '../../utils/api'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {db} from "../../firebase/firebase";
import {collection, doc, getDoc} from "firebase/firestore";

export const ItemDetailContainer = ({inicio}) => {

    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(() => {

        const collecionProductos = collection(db, 'productos')
        const referenciaDoc = doc(collecionProductos, id)
        getDoc(referenciaDoc)
            .then(result => {
                setProducto({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch(error => {
                console.log({error})
            })

    }, [id])


  return (
    <>
        <div className='align-center'>
        <h2 className="text-bg-info text-center"> {inicio}</h2>
        </div>
            <ItemDetail producto={producto} />
    </>
  )
}
