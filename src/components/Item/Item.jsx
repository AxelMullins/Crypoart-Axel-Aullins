import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = (props) => {

    return(
        <Link to={'/Detalle/'+props.id} className="col text-decoration-none text-black">
            <div className="card img-thumbnail" id="cards">
                <img className="card-img-top" src={props.imgUrl} alt={props.title} />
                <div className="card-body">
                    <h3 className="card-title">
                        {props.title}
                    </h3>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <h6 className="card-text">
                        id: {props.id}
                    </h6>
                    <h4 className="card-text float-end border border-1 rounded p-2">
                        ${props.price}
                    </h4>                        
                </div>
            </div>            
        </Link>
    )
}

export default Item;