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

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Nosotros" component={Nosotros}></Route>
                <Route exact path="/Detalle/:id" component={Detalle}></Route>
            </Switch>            
        </BrowserRouter> 
        );
    }

export default App;