import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const Cart = () => {

    const[carrito, setCarrito] = useContext(CartContext)

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
                                
                                <h4 className="card-text py-3">
                                    ${item.price}
                                </h4>                              
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>                   
                )                
            })}
            <div className="d-grid mb-5 gap-2">
            <button className="btn btn-success">Ir a Pagar</button>
            </div>
        </div>
    )
}

export default Cart