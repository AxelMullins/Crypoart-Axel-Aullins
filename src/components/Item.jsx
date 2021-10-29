import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, title, price, category, description, imgUrl}) => {

    return(
        <Link to={`/Detalle/${id}`} className="col text-decoration-none text-black">
            <div className="card img-thumbnail" id="cards">
                <img className="card-img-top" src={imgUrl} alt={title} />
                <div className="card-body">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <p className="card-text">
                        {description}
                    </p>
                    <h6 className="card-text">
                        id: {id}
                    </h6>
                    <h6 className="card-text">
                        {category}
                    </h6>
                    <h4 className="card-text float-end border border-1 rounded p-2">
                        ${price}
                    </h4>                        
                </div>
            </div>            
        </Link>
    )
}

export default Item;