import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

    const [carrito, setCarrito]=useContext(CartContext)

    const agregar = () => {
        const producto ={
            id:item.id,
            category:item.category,
            imgUrl:item.imgUrl,
            price:item.price,
            title:item.title,
            description:item.description
        }
        const temp = carrito;
        temp.push(producto);
        setCarrito(temp)
        console.log(carrito);
    }

    const onAdd = (contador) => {
        item.stock = -1;
        console.log("Item Detail")
        console.log(item)
        console.log(contador)
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
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />  
                                <div className="d-grid gap-2">
                                    <button onClick={agregar} className="btn btn-success">Agregar al carrito</button>
                                </div>                              
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail