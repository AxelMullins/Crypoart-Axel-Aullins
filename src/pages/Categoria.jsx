import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import ItemList from '../components/ItemList/ItemList';

const Categoria = ({item}) => {

    return (
        <div>
            <NavBar />
            <ItemList category={item.category}/>
        </div>
    )
}

export default Categoria;