import React from 'react'

const CartItem = ({item, title, id, quantity, price, imgUrl, description, deleteItem}) => {

    return (
        <div key="index" className="container-xl">
            <div className="row my-5">
                <div className="col-12 col-md-2">
                    <div className="card img-thumbnail">
                        <img className="img-fluid" src={imgUrl} alt={title} />
                    </div>
                </div>
                <div className="col-12 col-md-10">
                    <div className="card img-thumbnail">
                        <div className="card-body">
                            <div className="card-title border-bottom text-center d-flex justify-content-between align-items-end">
                                <h3 className="card-title text-center">
                                {title}
                                </h3>
                                <h6 className="card-text">
                                id: {id}
                                </h6>
                            </div>
                            
                            <p className="card-text">
                                {description}
                            </p>

                            <p>
                                Cantidad {quantity}
                            </p>
                            
                            <h4 className="card-text py-3">
                                $ {quantity * price} <small>(${price} c/u)</small> 
                            </h4>  
                            <button className="btn btn-outline-warning" onClick={ ()=> deleteItem(item) }><i className="far fa-trash-alt"></i></button>                         
                        </div>                            
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default CartItem