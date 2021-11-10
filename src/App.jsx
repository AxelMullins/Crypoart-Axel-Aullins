import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// CSS particular
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

// Components
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartForm from "./components/CartForm";

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/Nosotros" component={Nosotros}></Route>
                        <Route exact path="/Categoria/:id" component={Home}></Route>
                        <Route exact path="/Detalle/:id" component={ItemDetailContainer}></Route>
                        <Route exact path="/Cart" component={Cart}></Route>
                        <Route exact path="/CartForm" component={CartForm}></Route>
                    </Switch> 
                <Footer />            
            </BrowserRouter>
        </CartProvider>
        );
    }

export default App;