import React from "react";

// Components
import CartWidget from "./CartWidget"
import logo from "../assets/img/nftlogo.png"
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white my-2 shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand" activeClassName="active" to="/">
                    <img src={logo} className="logo" alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" activeClassName="active" aria-current="page" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/Categoria" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={`/Categoria/Star-Wars`}>Star Wars</Link></li>
                                <li><Link className="dropdown-item" to={`/Categoria/Guardians-of-the-Galaxy`}>Guardians of the Galaxy</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/Nosotros">Sobre Nosotros</NavLink>
                        </li>
                    </ul>                
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;