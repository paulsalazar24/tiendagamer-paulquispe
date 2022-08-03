import { ItemCount } from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'

export const ItemDatail = ({producto}) => {
 
    return (
        <>
            <div class="tarjeta">
            <div class="contenido">
                <div class="ladoIzq">
                    <h2 class="titulo text-center">{producto.nombre}</h2>
                    <hr></hr>
                    <div class="cuerpo">
                    <p>{producto.description}</p>
                    <ul>
                        <li>Cantidad disponible: {producto.stock}</li>
                        <li>Precio: {producto.precio}</li>
                    </ul>
                </div>
                <hr></hr>
                <ItemCount initial={1} stock={producto.stock}  />
            </div>
                    <div class="ladoDer">
                    <img src={producto.imagen} />
                    
                    </div>
                </div>
            </div>
        </>
      )
  }