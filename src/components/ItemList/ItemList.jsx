import React, {useState,useEffect} from 'react';
import Item from '../Item/Item';

const DB_NFT = 
    [
        {
            title: 'Robot T1',
            price: 100,
            description: 'Hola mundo',
            thumbnail:
            'https://images.unsplash.com/photo-1574047550055-3d87b9a3b11f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            id: 1,
        },
        {
            title: 'Robot T2',
            price: 800,
            description: 'Hola mundo',
            thumbnail:
            'https://images.unsplash.com/photo-1574047473179-a73921fc1eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            id: 2,
        },
        {
            title: 'Robot T3',
            price: 500,
            description: 'Hola mundo',
            thumbnail:
            'https://images.unsplash.com/photo-1567722066835-84bb115226b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            id: 3,
        },
    ];

// SOLO PARA FINES DEMOSTRATIVOS!
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

// nuestro componente
function ItemList(){
    //Inicializamos el estado con un array vacío
    const [items,setItems] = React.useState(null);
    //Inicializamos el estado "estado" con un valor por defecto de "cargando..."
    const [estado,setEstado] = useState('Cargando...');

    
    useEffect(() => { 
        // creamos la Promesa        
        let requestDatos = crearPromesa();

        // una vez que la promesa se cumple se ejecuta .then(),
        // guardamos los datos recibidos en el estado
        requestDatos
        .then( function(items_promise){
            setItems(items_promise);     
            setEstado('Listo!');           
            console.log(items_promise);
        })      
        // si hay errores, los "atrapamos" en nuestro .catch()
        .catch( function(err){
            console.log(err);   
            setEstado('Error');       
        })
        // si tenemos código que se ejecuta independientemente del resultado de la promesa, 
        // lo escribimos en .finally()
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
                                            description={item.description}
                                            price={item.price}
                                            imgUrl={item.thumbnail}
                                        />
                    )} 
                </div>
            </div>
        </section>
    )  
}

export default ItemList;