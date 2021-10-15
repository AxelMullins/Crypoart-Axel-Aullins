
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (titulo) => {

    return(
        <>
            <h1 className="border-bottom my-4 text-center">
                {titulo.title}
            </h1> 
            <ItemList />
        </>
    )
}

export default ItemListContainer;