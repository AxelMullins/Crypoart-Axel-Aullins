import React from 'react'
import CartItem from './CartItem'

const CartList = ({carrito}) => {
    return (
        <>
            {carrito.map(producto => <CartItem key={producto.id} producto={producto}/>)}
        </>
    )
}

export default CartList