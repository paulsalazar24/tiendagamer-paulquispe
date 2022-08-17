import {BsCart4} from "react-icons/bs";
import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";
import './CartWidget.css'

const StyledIcon = {color: "white", fontSize: "2.0em"};


function CartWidget() {

    const {cantidadTotalDeProductosCarrito} = useContext(CartContext)

    return (
        <>
            {
                cantidadTotalDeProductosCarrito() > 0 ? (
                    <Link to="/carrito">
                        <p className="circulo">{cantidadTotalDeProductosCarrito()}</p>
                        <BsCart4 style={StyledIcon}/>
                    </Link>
                ): ""
            }

        </>
    );
}

export {CartWidget}

