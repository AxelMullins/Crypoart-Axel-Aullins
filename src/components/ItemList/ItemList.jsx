import React, {useState,useEffect} from 'react';
import Item from '../Item/Item';
import { DB_NFT } from './DB_NFT'

// función que simula un error al devolver false
function comprobarError(){
    return (Math.random() < 0.1);
}

// Creamos una función que nos devuelva una promesa
// al cumplirse (resolve) nos devuelve los datos de la "base de datos"
// Simulamos la demora de solicitar datos a la red, usando setTimeout()      
function crearPromesa() {
    //Creamos la promesa con <new Promise>
    return new Promise((resolve, reject) => {  

    //para simular la demora de la red, creamos un setTimeOut
    setTimeout(
        function(){                
            const error = comprobarError();           
            if(!(error)){      
                resolve(DB_NFT);  
            }
            else { 
                reject( new Error("Error obteniendo los datos"));
            }
        }, 
        500);      
    });     
}

const ItemList = () => {
    //Inicializamos el estado con un array vacío
    const [items,setItems] = React.useState(null);
    //Inicializamos el estado "estado" con un valor por defecto de "cargando..."
    const [estado,setEstado] = useState('Cargando...');

    
    useEffect(() => {    
        let requestDatos = crearPromesa();

        requestDatos
        .then( function(items_promise){
            setItems(items_promise);     
            setEstado('Listo!');           
            console.log(items_promise);
        })
        .catch( function(err){
            console.log(err);   
            setEstado('Error');       
        })
        .finally( ()=>{
                setTimeout(function(){ setEstado(''); ; }, 2000);
            }
        )
    }, []);
    
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
                                />
                    )} 
                </div>
            </div>
        </section>
    )    
}

export default ItemList;