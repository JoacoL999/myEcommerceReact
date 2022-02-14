import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './../ItemDetail/ItemDetail'
import './../../global.css'
import { getFirestore } from '../../firebase';




function ItemDetailContainer (){


    const { gameid } = useParams();
    const [game, setGame] = useState([]);
    const [load, setLoad] = useState(false);


    useEffect(() => {

        const db = getFirestore()
        const productsCollection = db.collection('allgames')
      
        setLoad(true);
        productsCollection
        .get()
        .then((response) => response?.docs.map(doc => ({...doc.data()})))
        .then((data) => data.filter((pop) => pop.id === gameid))
        .then((g) => setGame(...g)) 
        .catch((error) => console.error(error))
        .finally(() => setLoad(false))
    }, [gameid])


    return <>
    
        <div className='container-fluid row justify-content-around'>

            {load ? (
                <div className="prx">
                    <div className='prxhv d-flex align-items-center my-auto mx-auto justify-content-center'>
                <div className="lds-dual-ring"></div>
                </div>
                </div>
            ) : (
                
                   <ItemDetail key={game.id} game={game}/>




            )}</div>
            
    
    </>   
                }


export default ItemDetailContainer