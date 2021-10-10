import React, { createContext, useState } from 'react'

export const contexto = createContext()
const {Provider} = contexto;

const CartContext = ({children}) => {

    const [nombre, setNombre] = useState("Axel")
    
    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }
    const valorDelContexto = {
        nombre,
        cambiarNombre
    }

    return (
        <>
            <Provider value={{nombre:"Axel"}}>
                {children}
            </Provider>
        </>
    )
}

export default CartContext;