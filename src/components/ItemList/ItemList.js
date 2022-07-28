import React, { createFactory } from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({listaProductos,}) => {

  return (
    <>
    <div className='row'>
    {
        listaProductos.map(producto=>
            <Item key={producto.id} producto={producto} />
            ) 
    }
    </div>

    </>
  )
}




