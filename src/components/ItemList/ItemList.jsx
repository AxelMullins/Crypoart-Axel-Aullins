import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { DB_NFT } from './DB_NFT'

// import { firestoreNFT } from '../../firebase/firebase';

const ItemList = () => {

    const [items,setItems] = React.useState([]);
    const {id} = useParams()

    // const [estado,setEstado] = useState("");

    // cambiar a "" cuando uso firebase
    const [estado,setEstado] = useState(<Loader />);

    useEffect(() => {

        // const collection = firestoreNFT.collection("productos")
        // // Hago consulta (get-where-doc-add)
        // const query = collection.get()
        // setEstado(<Loader />)

        // query
        //     .then((resultado) => {
        //         const documentos = resultado.docs

        //         const array_final_de_productos = []

        //         documentos.forEach(producto => {
        //             const id = producto.id
        //             const el_resto = producto.data()
        //             const producto_final = {id,...el_resto}
        //             array_final_de_productos.push(producto_final)
        //             setTimeout(function(){ setEstado(""); ; }, 10)
        //         })

        //         setItems(array_final_de_productos)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        if(id){
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(DB_NFT.filter(item => item.category === id))
                },2000)
            })
            promesa.then(items => setItems(items))
            promesa.finally( ()=>{
                setTimeout(function(){ setEstado(""); ; }, 10)
            })
        }else{
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(DB_NFT);
                },2000)
            })
            promesa.then(items => {
                setItems(items)
                setEstado(<Loader />)
            })
            promesa.finally( ()=>{
                setTimeout(function(){ setEstado(""); ; }, 10)
            })
        }
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