import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from 'react';
import '../ItemDetail/ItemDetail.css';
import { useNavigate } from "react-router-dom";



export const ItemDetail = ({producto}) => {

    const navigate = useNavigate()

    const [count, setCount] = useState(0);

    const [compra,setCompra]= useState(false);

    const onAdd = () => {
        setCompra(true)
        console.log("agregando al carrito ")
    }
 
    return (
        <>
            <div className="tarjeta">
            <div className="contenido">
                <div className="ladoIzq">
                    <h2 className="titulo text-center">{producto.nombre}</h2>
                    <hr></hr>
                    <div className="cuerpo">
                    <p>{producto.description}</p>
                    <ul>
                        <li>Cantidad disponible: {producto.stock}</li>
                        <li>Precio: {producto.precio}</li>
                    </ul>
                </div>
                <hr></hr>
                    {
                         compra ? <button className="btn btn-danger text-dark" onClick={()=> navigate("/carrito")} >Ir al carrito</button> :  <ItemCount initial={1} stock={producto.stock} count={count} setCount={setCount} onAdd={onAdd}/>

                     }
            </div>
                    <div className="ladoDer">
                    <img className="img_detalle" src={producto.imagen} />
                    
                    </div>
                </div>
            </div>
        </>
      )
  }