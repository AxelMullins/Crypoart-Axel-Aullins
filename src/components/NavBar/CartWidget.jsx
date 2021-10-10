import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/Cart">
            <i className="fas fa-shopping-cart"></i>
        </Link>
    )
}

export default CartWidget;


/*
const Padre = () => {
    
    const [usuarios, setEstado] = useState([]);

    console.log(nombre)

    const callbackDelPadre = (nombre) => {
        console.log("Callback del padre");

        const nuevo__array = [...usuarios, nombre]
        setUsuarios(nuevo__array);

        setUsuarios(...usuarios, nombre);
    }

    return (
        <>
        {estado ? estado : "No esta seteado el nombre de la App"}
        <Hijo callbackDelPadre={calbackDelPadre} />
        </>
    )
}
export default Padre

---------------------------

const Hijo = (callbackDelPadre) => {
    
    const [nombre, setNombre] = useState("")
    // const [apellido, setApellid] = useState("")

    const manejarChange = (e) => {
        
        setNombre(e.target.value)
    }

    const manejarClick = () => {
        callbackDelPadre(nombre);
    }

    return (
        <>
        <input id="nombre" onChange={manejarChange} />
        // <input id="apellido" onChange={manejarChange} />

        <button onClick={manejarClick}>Confirmar</button>
        </>
    )
}
export default Hijo

*/
