import React from "react";
// import { useState, useEffect } from "react"; //Crear un estado
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS particular
import "./App.css"

// CSS bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from "react-bootstrap/Container"

// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount"

const App = () => {
    let titulo = "Tienda NFT"

    return (
        <>
            <NavBar />
            <ItemListContainer title={titulo} />
            <ItemCount />
        </>
        );
    }

export default App;