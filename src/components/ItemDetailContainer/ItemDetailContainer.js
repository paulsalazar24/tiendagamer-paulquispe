import React, { useEffect, useState } from 'react'
import { getDetalleProducto } from '../../utils/api'
import { useParams } from 'react-router-dom';
import { ItemDatail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = ({inicio}) => {

    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getDetalleProducto(id).then(resp => {
            setProducto(resp.filter((producto) => producto.id === parseInt(id))[0])
        })
        .catch(error => console.error(error))
    }, [id])


  return (
    <>
        <div className='align-center'>
        <h2 className="text-bg-info text-center"> {inicio}</h2>
        </div>
            <ItemDatail producto={producto} />
    </>
  )
}
