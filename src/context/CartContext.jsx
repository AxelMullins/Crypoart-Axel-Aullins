import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([])
    const [prodStock, setProdStock] = useState(0)
    const [items, setItems] = useState(0)
    const [total, setTotal]= useState(0);

    const addItem = ({id, description, title, imgUrl, category, price, quantity}) => {

        const duplicate = carrito.find(producto => producto.id === id);

        if(duplicate !== undefined){

        const indexOfDuplicate = carrito.findIndex(producto => producto.id === id);
        const newQuantity = duplicate.quantity += quantity;
        quantity = newQuantity;
            
        carrito.splice(indexOfDuplicate, 1,
                {
                    id, description, title, imgUrl, category, price, quantity

                }
            );
            setProdStock(prodStock - quantity)
        } else {
            setCarrito([
                ...carrito, 
                { id, description, title, imgUrl, category, price, quantity},
            ]);
            setProdStock(prodStock - quantity)
            setItems(items +1)
        }
    };

    const isInCart = (id) => {
        carrito.find(item => item.id === id)
        console.log("isinCart id: " + id)
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setItems(0)
    }

    const borrarProducto = (index) => {
        let temporal = carrito.filter(item => item.id !== index);
        setCarrito(temporal);
        setItems(items -1)
    }

    useEffect(() => {

        let total = 0
        carrito.map((props) => {
            return (
                total = total + (props.price * props.quantity)
            )        
        });
        setTotal(total)
    }, [borrarProducto])

    return (
        <CartContext.Provider 
            value=
            {{carrito, 
            setCarrito,
            addItem,
            isInCart,
            limpiarCarrito,
            borrarProducto,
            items,
            total
            }}>

            {children}
        </CartContext.Provider>
    )
};

export default useCartContext;