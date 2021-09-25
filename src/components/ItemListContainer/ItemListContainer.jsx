// Components
// CSS
import { render } from "@testing-library/react";
import "./ItemListContainer.css"

const ItemListContainer = ({nombre, id}) => {


    return(
        <div className="ItemList">
            <div className="Item">
                <img src="https://images.unsplash.com/photo-1546776230-bb86256870ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80" />
                <div>
                    <h3>Nombre: {nombre}</h3>
                    <h6>ID: {id}</h6>
                    <p>Descripción</p>
                </div>
            </div>
            <div className="Item">
                <img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80" />
                <div>
                    <h3>Nombre: {nombre}</h3>
                    <h6>ID: {id}</h6>
                    <p>Descripción</p>
                </div>
            </div>             
        </div>
    )
}

render(<ItemListContainer nombre="Producto1" id="001" />)
export default ItemListContainer;