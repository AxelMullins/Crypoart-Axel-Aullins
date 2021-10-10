import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Item from '../Item/Item';
import { DB_NFT } from './DB_NFT'

const ItemList = () => {

    const [items,setItems] = React.useState([]);
    const {id} = useParams()

    const [estado,setEstado] = useState('Cargando...');

    useEffect(() => {
        if(id){
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(DB_NFT.filter(item => item.category === id))
                },2000)
            })
            promesa.then(items => setItems(items))
        }else{
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(DB_NFT)
                },2000)
            })
            promesa.then(items => {
                setItems(items)
                setEstado('Listo!');
            })
            promesa.finally( ()=>{
                setTimeout(function(){ setEstado(''); ; }, 2000);
            })
        }
    },[id])

    return (
        <section className="my-5">
            <div className="container">        
                <h3 className="my-4 text-center">{estado}</h3>
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

/*
// function comprobarError(){
//     return (Math.random() < 0.1);
// }

// function crearPromesa() {
//     return new Promise((resolve, reject) => {  

//     setTimeout(
//         function(){                
//             const error = comprobarError();           
//             if(!(error)){      
//                 resolve(DB_NFT);  
//             }
//             else { 
//                 reject( new Error("Error obteniendo los datos"));
//             }
//         }, 
//         500);      
//     });     
// }

// function crearPromesa() {
//     return new Promise((resolve, reject) => {  

//     const error = comprobarError();  
    
//         if(!(error)){      
//             resolve(DB_NFT);  
//         } else { 
//             reject( new Error("Error obteniendo los datos"));
//         }
//     });     
// }

    // useEffect(() => {    
    //     let requestDatos = crearPromesa();

    //     requestDatos
    //     .then( function(items_promise){
    //         setItems(items_promise);     
    //         setEstado('Listo!');           
    //         console.log(items_promise);
    //     })
    //     .catch( function(err){
    //         console.log(err);   
    //         setEstado('Error');       
    //     })
    //     .finally( ()=>{
    //             setTimeout(function(){ setEstado(''); ; }, 2000);
    //         }
    //     )
    // }, []);

*/