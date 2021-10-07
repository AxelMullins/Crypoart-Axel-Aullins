import React from "react";
import {useState,useEffect} from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    useEffect(()=>{
        console.log("Soy un efecto")
    },[])
    
    const aumentar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador -1)
        if (contador === 0) {
            setContador(0)
        }
    }

    return(
            <div className="container my-3 border border-2 rounded d-flex justify-content-between align-items-center p-2">
                <button onClick={restar} type="button" className="btn btn-secondary btn-sm">
                -               
                </button>
                <span className="">
                        {contador}                    
                </span>
                <button onClick={aumentar} type="button" className="btn btn-secondary btn-sm">
                +                
                </button>
            </div>
    )
}

export default ItemCount;