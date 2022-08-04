import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom';

export const Item = ({producto}) => {

      
  return (
    <>
    <div className="card col-4 contorno mb-4 ml-3" >
        <a href='#'>
        <img src={producto.imagen} className="tamano"/>
        </a>
        <div className="card-body body_cont">
            <h5 className="name">{producto.nombre}</h5>
            <p className="card-text mr-4">{producto.description}</p>
            <Link  to={`/producto/${producto.id}`}  className='btn btn-danger  mb-2 text-white'>Ver detalle</Link>
        </div>

    </div>
    </>
   
  )
}


// ![Alt Text](https://i.imgur.com/1yBXXgz.gif)


