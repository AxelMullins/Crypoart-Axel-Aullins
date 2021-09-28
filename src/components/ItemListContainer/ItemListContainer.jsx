// Components
// CSS
import "./ItemListContainer.css"

const ItemListContainer = ({name, id, description}) => {


    return(
        <div className="ItemList">
            <div className="Item">
                <img src="https://images.unsplash.com/photo-1546776230-bb86256870ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80" />
                <div>
                    <h3>Nombre: {name}1</h3>
                    <h6>ID: {id}1</h6>
                    <p>Descripción: {description}</p>
                </div>
            </div>
            <div className="Item">
                <img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=810&q=80" />
                <div>
                    <h3>Nombre: {name}2</h3>
                    <h6>ID: {id}2</h6>
                    <p>Descripción: {description}</p>
                </div>
            </div>             
        </div>
    )
}

export default ItemListContainer;