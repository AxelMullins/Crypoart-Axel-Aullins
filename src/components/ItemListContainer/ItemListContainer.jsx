
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (titulo) => {

    return(
        <>
            <div className="container">
                <h1 className="border-bottom my-4 text-center">
                    {titulo.title}       
                </h1> 
            </div>            
            <ItemList />
        </>
    )
}

export default ItemListContainer;