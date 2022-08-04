import { ItemCount } from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'

export const ItemDetail = ({producto}) => {
 
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
                <ItemCount initial={1} stock={producto.stock}  />
            </div>
                    <div className="ladoDer">
                    <img className="img_detalle" src={producto.imagen} />
                    
                    </div>
                </div>
            </div>
        </>
      )
  }