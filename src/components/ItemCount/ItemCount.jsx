import React, { useContext } from "react";
import {useState} from 'react'
import { CartContext } from "../../CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial = 1, onAdd, item}) => {

    const alerta = () => toast("¡Producto agregado al carrito!");

    const [quantity, setQuantity] = useState(initial)
    const [carrito, setCarrito]=useContext(CartContext)
    
    // Suma cantidad 
    const aumentar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    // Resta cantidad
    const restar = () => {
        setQuantity(quantity -1)
        if (quantity === 1) {
            setQuantity(1)
        }
    }

    const agregar = () => {
        onAdd(quantity)

        const producto ={
            id:item.id,
            category:item.category,
            imgUrl:item.imgUrl,
            price:item.price,
            title:item.title,
            description:item.description,
            quantity:quantity
        }
        const temporal = carrito;
        temporal.push(producto);
        setCarrito(temporal);
        console.log(carrito);
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
                    <button onClick={aumentar} type="button" className="btn btn-secondary btn-sm">
                    +                
                    </button>
            </div>
            <span className="py-3">
                    Stock disponible: {stock}
            </span>  
            <div className="d-grid gap-2">
                    <button onClick={() => {agregar(); alerta()}} onAdd={onAdd} className="btn btn-success">Agregar al carrito</button>
                    <ToastContainer />
            </div>           
        </>
    )
}

export default ItemCount;