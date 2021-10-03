import React from "react";
import {useState,useEffect} from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    // useEffect(()=>{
    //     console.log("Soy un efecto")
    // },[])
    
    const aumentar = () => {
        setContador(contador + 1)
    }

    return(
            <div className="container">
                <button onClick={aumentar} type="button" className="btn btn-primary">
                Agregar al carrito                
                </button>
                <i className="fas fa-shopping-cart fs-2 mx-4 position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {contador}                    
                    </span>
                </i>
            </div>
    )
}

export default ItemCount;