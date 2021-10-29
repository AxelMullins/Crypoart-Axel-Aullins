import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { firestoreNFT } from '../firebase/firebase';

const ItemDetailContainer = () => {

    const [item,setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {

        const collection = firestoreNFT.collection("productos")
        let query = collection.doc(id)
        query = query.get()

        query
        .then((doc) => {
            setItem( {id: doc.id, ...doc.data()} )
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])

    return (
        <div>
            {item
            ? <ItemDetail item={item}/> 
            : <Loader/>}
        </div>
    )
}

export default ItemDetailContainer;