import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Item from './Item';
import Loader from './Loader';
import { firestoreNFT } from '../firebase/firebase';

const ItemList = () => {

    const [items,setItems] = React.useState([]);
    const {id} = useParams()
    const [estado,setEstado] = useState("");


    useEffect(() => {

        const collection = firestoreNFT.collection("productos")
        let query
        setEstado(<Loader />)

        if (id === undefined) {
            query = collection.get()
        } else {
            query = collection.where('category', '==', id).get()
        }
        query
            .then((resultado) => {
                const documentos = resultado.docs

                const array_final_de_productos = []

                documentos.forEach(producto => {
                    const id = producto.id
                    const el_resto = producto.data()
                    const producto_final = {id,...el_resto}
                    array_final_de_productos.push(producto_final)
                    setTimeout(function(){ setEstado(""); ; }, 10)
                })

                setItems(array_final_de_productos)
            })
            .catch(error => {
                console.log(error)
            })
    },[id])

    return (
        <section className="my-5">
            <div className="container">        
                {estado}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {(items !== null) && 
                            items.map( (item,index) =>
                                <Item
                                    key={index}
                                    title={item.title}
                                    id={item.id}
                                    description={item.description}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    category={item.category}
                                    stock={item.stock}
                                />
                    )}
                </div>
            </div>
        </section>
    )    
}

export default ItemList;