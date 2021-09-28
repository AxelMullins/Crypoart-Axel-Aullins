//import { useState, useEffect } from "react"; //Crear un estado

// CSS
import "./App.css"

// Components
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//import Container from "react-bootstrap/Container"; //Ver como importar

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer 
                name="Robot T" 
                id="00"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptas?"
            />
        </>
        
    )
}
export default App;