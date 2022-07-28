import React, { useEffect, useState } from 'react';
import '../../App.css';
import {ItemCount} from '../ItemCount/ItemCount.js'
import { ItemList } from '../ItemList/ItemList';


const ItemListContainer = ({ saludo }) => {

    const[listaProductos,setListaProductos]= useState([])
    // const[mensaje,setMensaje] = useState(false)


    const productos =require('../../data.json');



      const data = new Promise((resolve, reject) => {
        //realizaremos las acciones 
        let condicion = true;
        setTimeout(()=> {
            if(condicion){
                resolve(productos)
            }else{
                reject('salio mal')
            }
        },2000)
      })
     

      useEffect(()=>{
        data.then((res)=> setListaProductos(res.productos))
      },[])

    console.log({listaProductos})

    return (
        <div className='container mt-4'>
            <h2 className='estilo'>{saludo}</h2>
            {/* <div className='alert alert-info'>
                {mensaje === '' || <p>{mensaje}</p>}
            </div> */}

            <ItemList listaProductos={listaProductos}/>
            
        </div>
    
    );
}

export {ItemListContainer};