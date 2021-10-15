import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import { DB_NFT } from '../ItemList/DB_NFT'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams()

    useEffect(()=>{

        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(DB_NFT)
            },2000)
        })

        pedido
        .then(res=>{
            if(id){
                setItem(res.filter(item=>item.id==id)[0])
            }
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