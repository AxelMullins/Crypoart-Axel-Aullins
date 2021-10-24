import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const useCarrito = () => {
    return useContext(CartContext)
}

export const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    // const addItem = (item, quantity) => {
    //     setCarrito ( [...carrito, {...item, quantity}])
    // }

    return (
        <>
            <CartContext.Provider 
            value=
            {[carrito, 
            setCarrito
            ]}>

            {props.children}
            </CartContext.Provider>
        </>
    )
}