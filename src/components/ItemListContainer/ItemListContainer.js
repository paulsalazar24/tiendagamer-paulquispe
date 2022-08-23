import React, { useEffect, useState } from 'react';
import '../../App.css';
import { ItemList } from '../ItemList/ItemList';
// import {getProductoCategoria, getProductos} from '../../utils/api';
import {useParams} from "react-router-dom";
import { query, where, collection, getDocs } from "firebase/firestore"
import {db} from "../../firebase/firebase";

const ItemListContainer = ({ saludo }) => {


    const { id } = useParams()
    const[listaProductos,setListaProductos]= useState([])

    console.log({id})

    useEffect(() => {

        const q = id
            ? query(collection(db, 'productos'), where("categoria_id", "==", id))
            : collection(db, 'productos')

        getDocs(q)
            .then(result => {
                console.log({result})
                const listaProducto = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                console.log({listaProducto})
                setListaProductos(listaProducto)
            })
            .catch((error) => console.log(error))
    }, [id]);

    console.log({listaProductos})

    return (
        <>
            <div className='container mt-4 ml-2'>
                <h2 className='estilo'>{saludo}</h2>

                <ItemList listaProductos={listaProductos}/>

            </div>

        </>

    
    );
}

export {ItemListContainer};