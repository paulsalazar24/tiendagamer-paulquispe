import React from 'react'
// import { useState } from 'react';
// import { ItemCount } from '../ItemCount/ItemCount'
import '../Item/Item.css'
import { Link } from 'react-router-dom';

export const Item = ({producto}) => {

      
  return (
    <>
    <div className="card col-4 contorno mb-3 ml-2" >

        <a href='#'>
        <img src={producto.imagen} className="tamano"/>
        </a>
        <div className="card-body">
            <h5 className="">{producto.nombre}</h5>
            <p className="card-text">{producto.description}</p>
            <ul>
                <li>Cantidad disponible: {producto.stock}</li>
                <li>Precio: {producto.precio}</li>
            </ul>
        </div>
            <Link  to={`/producto/${producto.id}`}  className='btn btn-danger  mb-2 text-dark'>Ver detalle</Link>

    </div>

    </>
   
  )
}


