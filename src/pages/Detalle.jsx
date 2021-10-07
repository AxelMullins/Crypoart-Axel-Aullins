import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import { DB_NFT } from '../components/ItemList/DB_NFT'
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount/ItemCount';

const Detalle = (props) => {

const [identificador] = props.match.params.id;
console.log(identificador);

let detalle = DB_NFT[identificador -1];

    return (
        <div>
            <NavBar />
            <div className="container-xl">
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className="card img-thumbnail">
                            <img className="card-img-top" src={detalle.imgUrl} alt={detalle.title} />
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card img-thumbnail">
                            <div className="card-body">
                                <div className="card-title border-bottom text-center d-flex justify-content-between align-items-end">
                                    <h3 className="card-title text-center">
                                    {detalle.title}
                                    </h3>
                                    <h6 className="card-text">
                                    id: {detalle.id}
                                    </h6>
                                </div>
                                
                                <p className="card-text">
                                    {detalle.description}
                                </p>
                                
                                <h4 className="card-text py-3">
                                    ${detalle.price}
                                </h4>
                                <ItemCount />
                            </div>
                            <div className="d-grid gap-2">
                                <Link to='/' className="btn btn-success">Agregar al carrito</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle;