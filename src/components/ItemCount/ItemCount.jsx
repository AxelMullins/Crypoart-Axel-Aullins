import React, { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial = 1, item}) => {

    const alerta = () => toast("¡Producto agregado al carrito!");

    const [quantity, setQuantity] = useState(initial)    
    const [prodStock, setProdStock] = useState(stock)
    const [carrito, setCarrito] = useContext(CartContext)

    // const onAdd = () => {
    //     item.stock = -1;
    //     console.log(item.stock)
    // }
    
    // Suma cantidad 
    const aumentar = () => {
        if (quantity < prodStock) {
            setQuantity(quantity +1)
        }
    }
    // Resta cantidad
    const restar = () => {
        setQuantity(quantity -1)
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
        if (quantity === 1) {
            setQuantity(1)
        }
    }

    const agregar = () => {
        // onAdd(quantity)
        setProdStock(prodStock - quantity)

        const producto = {
            id:item.id,
            category:item.category,
            imgUrl:item.imgUrl,
            price:item.price,
            title:item.title,
            description:item.description,
            // stock:prodStock,
            quantity:quantity
        }
        const temporal = carrito;
        temporal.push(producto);
        setCarrito(temporal);
        // if (isInCart(item.id)) {
        //     const agregarNuevamente = item.find(item.id)
        // } else {
        //     setCarrito( [...temporal, {...item, quantity}] );
        //     console.log(carrito);
        // }
    }

    // Para que no se repita el carrito

    // const isInCart = () => {
    //     carrito.find(item => item.id = carrito.id)
    // }

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
                    {/* Stock disponible: {stock} */}
                    Stock disponible: {prodStock}
            </span>  
            <div className="d-grid gap-2">
                    { prodStock > 0
                    ?   <button onClick={() => {agregar(); alerta()}} className="btn btn-success">Agregar al carrito</button>
                    // ?   <button onClick={() => {agregar(); alerta()}} onAdd={onAdd} className="btn btn-success">Agregar al carrito</button>
                    :   <button disabled className="btn btn-success">Producto sin stock</button>
                    }                    
                    <ToastContainer />
            </div>           
        </>
    )
}

export default ItemCount;