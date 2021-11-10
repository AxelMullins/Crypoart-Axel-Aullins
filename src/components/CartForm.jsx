import React, { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/img/nftlogo.png"
import useCartContext from '../context/CartContext';

const CartForm = () => {
    const {carrito, total, limpiarCarrito} = useCartContext();
    const [captchaValido, setCaptchaValido] = useState(null);
    const [formularioEnviado, setFromularioEnviado] = useState(false);
    const [pedido, setPedido]= useState(null);
    const [orderId, setOrderId]= useState(null);

    useEffect(() => {

        let pedido = "";
        let orderId = "";
        carrito.map((props) => {
            return (
                pedido = pedido + 
                ("- " + props.title + " (cantidad: " + props.quantity + ", precio unitario: $" + props.price + ");" + "%0a"),
                orderId = orderId + ("00" + props.id)
            )        
        });
        setPedido(pedido)
        setOrderId(orderId)
    }, [])

    const captcha = useRef(null)

    const onChange = () => {
        if (captcha.current.getValue()) {
            console.log("No es un robot")
            setCaptchaValido(true);
        }
    }

    const enviarWhatsapp = (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        const url = 
        
            "https://api.whatsapp.com/send?phone=+543517054804&text=Hola%20TiendaNFT%20" +
            "%0a" + "%0a" +
            "Nombre: " + name + "%0a" +
            "Teléfono: " + phone + "%0a" +
            "Email: " + email + "%0a" + "%0a" +
            "Estoy interesado en los siguientes productos:" + "%0a" +
            pedido + "%0a" + 
            "Precio total: $" + total + "%0a" +
            "Nro de orden: " + orderId;

        window.open(url, '_blank').focus();
        setFromularioEnviado(true);
        limpiarCarrito()
        }

return (
    <div className="container-fluid py-md-5" id="form__contacto">
        {!formularioEnviado &&
        <div className="container-xl pt-3">
            <div className="row py-3 d-flex align-items-center">
                <div className="col-12 col-md-6 p-md-5 fw-1">
                    <h4>Completá el formulario y nos pondremos en contacto a la brevedad</h4>
                    <p className="text-end">Total a pagar: <b> ${total} </b></p>
                    <form className="py-4" onSubmit={enviarWhatsapp}>
                        <div className="row form-floating mb-3">
                            <input type="text" className="form-control" id="name" placeholder="Nombre" required/>
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="row form-floating mb-3">
                            <input type="text" className="form-control" id="phone" placeholder="Teléfono" required/>
                            <label htmlFor="phone">Teléfono</label>
                        </div>
                        <div className="row form-floating mb-3">
                            <input type="text" className="form-control" id="email" placeholder="Email" required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="my-3 d-flex justify-content-center">
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6LeT3iYdAAAAAIfYyms3BltE74JgIs2-HCT3eMQd"
                                onChange={onChange}
                            />
                        </div>
                        {captchaValido &&                        
                        <input type="submit" name="submit" className="form-control btn btn-success mb-3" defaultValue="Solicitar presupuesto por whatsapp" />
                        }
                        {!captchaValido &&
                        <div>
                            <span className="fw-lighter text-danger">*Primero debes aceptar el Captcha</span>
                            <input type="submit" disabled name="submit" onClick={enviarWhatsapp} className="form-control btn btn-disabled mb-3" defaultValue="Solicitar presupuesto por whatsapp" />
                        </div>                        
                        }
                    </form>
                </div>
                <div className="col-12 col-md-6">
                        <img src={logo} className="img-fluid"
                            alt="Logo TiendaNFT" />
                </div>
            </div>
        </div>
        }
        {formularioEnviado &&
        <div className="text-center">
            <h2>¡Gracias por realizar tu compra!</h2>
            <p className="fw-lighter">Nro de orden: {orderId}</p>
        </div>        
        }
    </div>
    )
}

export default CartForm