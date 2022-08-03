import React, { useEffect, useState } from 'react';
import '../../App.css';
import { ItemList } from '../ItemList/ItemList';
import {getDetalleProducto, getProductoCategoria, getProductos} from '../../utils/api';
import {useParams} from "react-router-dom";


const ItemListContainer = ({ saludo }) => {


    const { id } = useParams()

    console.log(id)

    
    const[listaProductos,setListaProductos]= useState([])

      useEffect(()=>{
          if(id == null){

              getProductos().then(resp => {
                  setListaProductos(resp)
              }).catch(error => console.error(error))

          }else{
              getProductoCategoria(id).then(resp => {
                  setListaProductos(resp)
              }).catch(error => console.error(error))
          }
      },[id])

    console.log({listaProductos})

    return (
        <>
            <div className='container mt-4'>
                <h2 className='estilo'>{saludo}</h2>

                <ItemList listaProductos={listaProductos}/>

            </div>

        </>

    
    );
}

export {ItemListContainer};