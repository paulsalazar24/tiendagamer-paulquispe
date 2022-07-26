import React from 'react'
// import { useState } from 'react';
// import { ItemCount } from '../ItemCount/ItemCount'
import '../Item/Item.css'

export const Item = ({producto}) => {
   

    // const agregarCarrito = (cantidad) => {
    //     console.log(`Agregaste ${cantidad} al carrito`)
    //   }
      
  return (
    <>
    <div className="card col-4 contorno mb-3 ml-2" >
        <a href='#'>
        <img src={producto.imagen} className="tamano"/>
        </a>
        <div className="card-body">
            <h5 className="">{producto.nombre}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>   
        </div>
        <button className='btn btn-primary mb-2'>Ver detalle</button>
    </div>

  
    </>
   
  )
}


