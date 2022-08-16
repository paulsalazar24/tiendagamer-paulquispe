import React, {useContext} from 'react';
import {CartContext} from "../../context/CartContext";
import {useNavigate} from "react-router-dom";

export const Carrito = () => {


    const {cart, precioTotal, removeItem, cantidadTotalDeProductosCarrito} = useContext(CartContext)
    const navigate = useNavigate()

    return (

        <>
            {
                cantidadTotalDeProductosCarrito() > 0 ? (
                    <div className="container mt-3">
                        <h2>Productos selecionados: </h2>
                        <p>Productos :</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nombre Producto</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th className="text-end">Sub total</th>
                                <th className="text-center">Aciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(elemt=>(
                                    <tr key={elemt.id}>
                                        <td>{elemt.nombre}</td>
                                        <td>{elemt.cantidad}</td>
                                        <td>{elemt.precio}</td>
                                        <td className="text-end">{elemt.precio * elemt.cantidad}</td>
                                        <td>
                                            <button className="btn btn-danger text-danger" onClick={()=> removeItem(elemt.id)}><i className="fa bi-trash-fill"></i></button>
                                        </td>
                                    </tr>
                                ))

                            }
                            <tr>
                                <td>Total</td>
                                <td colSpan="3" className="text-end">{precioTotal()}</td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                ) : (
                    <div>
                        <h1>no hay nada.... </h1>

                        <button className="btn btn-danger text-danger" onClick={()=> navigate("/")}> Seguir comprando Banda</button>
                    </div>

                )
            }

        </>
    )
}
