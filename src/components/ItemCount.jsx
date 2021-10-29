import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const alerta = () => toast("¡Producto agregado al carrito!"); 
    
    const aumentar = () => {
        if (quantity < stock) { setQuantity(quantity +1) }
    }
    const restar = () => {
        setQuantity(quantity -1)
        if (quantity > 1) { setQuantity(quantity -1) }
        if (quantity === 1) { setQuantity(1) }
    }

    return (
        <>
            <div className="container my-3 border border-2 rounded d-flex justify-content-between align-items-center p-2">
                    <button onClick={restar} type="button" className="btn btn-secondary btn-sm">
                    -               
                    </button>
                    <span>
                            {quantity}                    
                    </span>
                    <button 
                    onClick={aumentar} type="button" className="btn btn-secondary btn-sm">
                    +                
                    </button>
            </div>
            <span className="py-3">
                    Stock disponible: {stock}
            </span>  
            <div className="d-grid gap-2">
                    { stock > 0
                    ?   <button onClick={ () => {onAdd(quantity); alerta()} } className="btn btn-success">Agregar al carrito</button>
                    :   <button disabled className="btn btn-success">Producto sin stock</button>
                    }
            </div>           
        </>
    )
}

export default ItemCount;