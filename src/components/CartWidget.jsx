import React from "react";
import { Link } from "react-router-dom";
import useCartContext from "../context/CartContext";

const CartWidget = () => {

    const { items } = useCartContext()
    console.log(items)

    return (
        <>
            { ( items > 0 ) ?
                <Link to="/Cart" className="position-relative">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {items}
                    </span>
                </Link>                
                :
                <Link to="/Cart" className="position-relative">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
            }
            
        </>        
    )
}

export default CartWidget;