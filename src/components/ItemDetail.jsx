import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useCartContext from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    const { addItem } = useCartContext();
    const [isAdded, setIsAdded] = useState(false);

    function onAdd(quantity) {
        setIsAdded(true)
        addItem({
                id:item.id,
                category:item.category,
                imgUrl:item.imgUrl,
                price:item.price,
                title:item.title,
                description:item.description,
                quantity:quantity
        });
        console.log("Agregaste " + quantity + " unidades")
    }

    return (
            <div className="container-xl">
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className="card img-thumbnail">
                            <img className="card-img-top" src={item.imgUrl} alt={item.title} />
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
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
                                { (isAdded === false) ?
                                <ItemCount 
                                    stock={item.stock} 
                                    initial={1}
                                    onAdd={onAdd}/>
                                :
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success">
                                        <Link to="/Cart" className="text-white text-decoration-none">Finalizar compra</Link>
                                    </button>
                                </div>
                                
                                }
                                <ToastContainer />
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail