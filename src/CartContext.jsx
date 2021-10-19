import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const useCarrito = () => {
    return useContext(CartContext)
}

export const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    // Borrar todo el carrito
    const limpiarCarrito = () => {
        setCarrito([])
    }

    return (
        <>
            <CartContext.Provider 
            value=
            {[carrito, 
            setCarrito, 
            limpiarCarrito
            ]}>

            {props.children}
            </CartContext.Provider>
        </>
    )
}