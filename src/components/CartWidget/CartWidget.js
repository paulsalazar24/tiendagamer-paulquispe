import {BsCart4} from "react-icons/bs";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";

const StyledIcon = {color: "white", fontSize: "2.0em"};


function CartWidget() {

    const {cantidadTotalDeProductosCarrito} = useContext(CartContext)

    return (
        <>
            <Link to="/carrito">
                <BsCart4 style={StyledIcon}/> {cantidadTotalDeProductosCarrito()}
            </Link>
        </>
    );
}

export {CartWidget}

