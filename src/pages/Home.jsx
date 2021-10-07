import React from "react";

// Components
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemCount from "../components/ItemCount/ItemCount"

const Home = () => {
    let titulo = "Tienda NFT"

    return (
            <div className="container-xl">
                <NavBar />
                <ItemListContainer title={titulo} />                
            </div>
    )
}

export default Home;