import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DB_NFT } from "../components/ItemList/DB_NFT";

// Components
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {

    let titulo = "Tienda NFT"    

    return (
            <div>
                <ItemListContainer title={titulo} />                
            </div>
    )
}

export default Home;