import { ItemCount } from "../ItemCount/ItemCount";
import {useContext, useState} from 'react';
import '../ItemDetail/ItemDetail.css';
import { useNavigate } from "react-router-dom";
import {CartContext} from "../../context/CartContext";




export const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)

    const navigate = useNavigate()

    const [count, setCount] = useState(0);

    const [compra,setCompra]= useState(false);

    const onAdd = () => {
        let productoNuevo = {
            id : producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            stock: producto.stock,
            cantidad: count
        }

        setCompra(true)
        addItem(productoNuevo)
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
                        <li>Precio: s/{producto.precio} </li>
                    </ul>
                </div>
                <hr></hr>
                    {
                         compra ? <div><button className="btn btn-primary text-primary"  onClick={()=> navigate("/")} >Seguir comprando</button> <button className="btn btn-danger text-dark" onClick={()=> navigate("/carrito")} >Ir a carrito</button></div>
                             :  <ItemCount initial={1} stock={producto.stock} count={count} setCount={setCount} onAdd={onAdd}/>
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