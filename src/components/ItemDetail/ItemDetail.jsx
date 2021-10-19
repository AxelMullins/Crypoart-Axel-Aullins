import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

    const onAdd = () => {
        item.stock = -1;
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
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} item={item}/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail