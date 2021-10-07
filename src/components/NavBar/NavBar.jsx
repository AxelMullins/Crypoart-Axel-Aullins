import React from "react";
import "./NavBar.css"

// Components
import CartWidget from "./CartWidget"
import logo from "../../assets/img/nftlogo.png"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white my-2 shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/Categorias" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/Categorias/1">NFT Robot</Link></li>
                                <li><Link className="dropdown-item" to="/Categorias/2">NFT Punk</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Nosotros">Sobre Nosotros</Link>
                        </li>
                    </ul>                
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;