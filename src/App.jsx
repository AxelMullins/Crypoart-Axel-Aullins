import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// CSS particular
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

// Components
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Detalle from "./pages/Detalle";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./CartContext";
import Cart from "./pages/Cart";

// Clase 09
// export const contexto = createContext({nombre:"Axel"})
// const {Consumer, Provider} = contexto;
// console.log(contexto);

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Nosotros" component={Nosotros}></Route>
                    <Route exact path="/Categoria/:id" component={Home}></Route>
                    <Route exact path="/Detalle/:id" component={Detalle}></Route>
                    <Route exact path="/Cart" component={Cart}></Route>
                </Switch>            
            </BrowserRouter> 
            <Footer />
        </CartProvider>
        );
    }

export default App;