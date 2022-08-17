import React, {useContext} from 'react';
import {CartContext} from "../../context/CartContext";
import {useNavigate} from "react-router-dom";
import './Carrito.css'

export const Carrito = () => {


    const {cart, precioTotal, removeItem, cantidadTotalDeProductosCarrito, clear} = useContext(CartContext)
    const navigate = useNavigate()

    return (

        <>
            {
                cantidadTotalDeProductosCarrito() > 0 ? (
                    <div className="container mt-3">
                        <h2 className="text-danger">Cantidad de productos: {cantidadTotalDeProductosCarrito()}</h2>
                        <button className="btn-carro" onClick={()=> clear()}>Limpiar carrito</button>
                        <br/>
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
                                        <td>s/{elemt.precio}</td>
                                        <td className="text-end">s/{elemt.precio * elemt.cantidad}</td>
                                        <td>
                                            <button className="btn btn-danger text-danger" onClick={()=> removeItem(elemt.id)}><i className="fa bi-trash-fill"></i></button>
                                        </td>
                                    </tr>
                                ))

                            }
                            <tr>
                                <td>Total</td>
                                <td colSpan="3" className="text-end">s/{precioTotal()}</td>
                                <td colSpan="4"> <button className="btn btn-primary text-primary">Pagar</button>  </td>
                            </tr>

                            </tbody>

                        </table>
                    </div>
                ) : (
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="" width="250px"/>
                        <h6 className="text-primary">Lo siento, no se encuentra productos en el carrito</h6>
                        <button className="btn-carro" onClick={()=> navigate("/")}>Ir a comprar</button>
                    </div>

                )
            }

        </>
    )
}
