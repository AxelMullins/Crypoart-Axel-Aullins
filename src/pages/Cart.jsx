import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'

const Cart = () => {

    const[carrito, setCarrito] = useContext(CartContext)

    // Precio total
    const [total,setTotal]=useState(0);

    useEffect(() => {

        let total = 0
        carrito.map((props)=>{
            return (
                total = total + (props.price * props.quantity)
            )        
        });

        setTotal(total)
    }, [])

    // Borrar un producto particular
    // const borrarProducto = (index) => {
    //     let temporal = carrito;
    //     temporal.splice(index, 0)
    //     setTotal(temporal);
    // }
    const borrarProducto = (index) => {
        let temporal = carrito.filter(producto => producto.item !== index);
        setCarrito(temporal);
        setTotal(temporal)
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    if (carrito.length !== 0) {

        return (
            <div className="container-xl">
                {carrito.map((item, index) => {
                    return (
                        <div key="index" className="container-xl">
                            <div className="row my-5">
                                <div className="col-12 col-md-2">
                                    <div className="card img-thumbnail">
                                        <img className="img-fluid" src={item.imgUrl} alt={item.title} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-10">
                                    <div className="card img-thumbnail">
                                        <div className="card-body">
                                            <div className="card-title border-bottom text-center d-flex justify-content-between align-items-end">
                                                <h3 className="card-title text-center">
                                                {item.title}
                                                </h3>
                                                <h6 className="card-text">
                                                id: {item.id}
                                                </h6>
                                            </div>
                                            
                                            <p className="card-text">
                                                {item.description}
                                            </p>

                                            <p>
                                                Cantidad {item.quantity}
                                            </p>
                                            
                                            <h4 className="card-text py-3">
                                                $ {item.quantity * item.price} <small>(${item.price} c/u)</small> 
                                            </h4>  
                                            <button className="btn btn-outline-warning" onClick={ () => borrarProducto(index) }><i className="far fa-trash-alt"></i></button>                         
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>                   
                    )                
                })}
                <p className="text-end">Total a pagar: <b> ${ total } </b></p>
                <div className="d-grid mb-5 gap-2">
                <button className="btn btn-success">Ir a Pagar</button>
                <button onClick={limpiarCarrito} className="btn btn-secondary">Limpiar carrito</button>
                </div>
            </div>
        )
    } else {
        return (
        <div className="container-xl my-5 text-center fw-light fs-6">
            Carrito vacio
        </div>
        )
    }
}

export default Cart