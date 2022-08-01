import React, { useEffect, useState } from 'react';
import '../../App.css';
import { ItemList } from '../ItemList/ItemList';
//import productos from '../../data.json';
import { getProductos } from '../../utils/api';


const ItemListContainer = ({ saludo }) => {

    
    const[listaProductos,setListaProductos]= useState([])

      useEffect(()=>{

      getProductos().then(resp => {
            setListaProductos(resp)
      }).catch(error => console.error(error))

      },[])

    console.log({listaProductos})

    return (
        <div className='container mt-4'>
            <h2 className='estilo'>{saludo}</h2>
        
            <ItemList listaProductos={listaProductos}/>
            
        </div>
    
    );
}

export {ItemListContainer};