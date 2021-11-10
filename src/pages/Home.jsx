import React from "react";

// Components
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {

    let titulo = "Tienda NFT"    

    return (
            <div>
                <ItemListContainer title={titulo} />                             
            </div>
    )
}

export default Home;