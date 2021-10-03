import React from "react";

const Item = (props) => {

    return(
            <div className="col">
                <div className="card img-thumbnail">
                    <img className="card-img-top" 
                        src={props.imgUrl} 
                        alt={props.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {props.title}
                        </h5>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <h6 className="card-text">
                            ${props.price}
                        </h6>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a href="/" className="btn btn-success">Agregar al carrito</a>
                        </div>                        
                    </div>
                </div>
            </div>
    )
}

export default Item;