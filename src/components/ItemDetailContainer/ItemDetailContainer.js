import React, { useEffect, useState } from 'react'
import { getDetalleProducto } from '../../utils/api'
import { ItemDatail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = ({inicio}) => {

    const [producto, setProducto] = useState({})


    useEffect(() => {
        getDetalleProducto().then(resp => {
            setProducto(resp[0])
        })
        .catch(error => console.error(error))
    }, [])
    
  return (
    <>
    <div className='align-center'>
    <h2 className="text-bg-info text-center"> {inicio}</h2>
    </div>
        <ItemDatail producto={producto} />
    </>
  )
}
