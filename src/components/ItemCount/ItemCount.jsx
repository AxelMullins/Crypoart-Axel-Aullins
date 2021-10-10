import React from "react";
import {useState,useEffect} from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {

    const [contador, setContador] = useState(initial)

    useEffect(()=>{console.log("Soy un efecto")},[])
    
    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        setContador(contador -1)
        if (contador === 1) {
            setContador(1)
        }
    }

    const agregar = () => {
        onAdd(contador)
    }

    return (
        <>
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
            <span className="py-3">
                    Stock disponible: {stock}
            </span>
            <div className="d-grid gap-2">
                    <button onClick={agregar} className="btn btn-success">Agregar al carrito</button>
            </div>
        </>
            
    )
}

export default ItemCount;