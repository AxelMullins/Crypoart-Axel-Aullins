import React from "react";
import "./Header.css"
import NavBar from "./NavBar";
import CartWidget from "./CartWidget"
import logo from "../../assets/img/nftlogo.png"


const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="" />
            <NavBar />
            <CartWidget />
        </header>
    )
}

export default Header;