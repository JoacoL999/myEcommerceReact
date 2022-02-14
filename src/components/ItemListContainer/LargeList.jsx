import React, { useEffect, useState } from 'react';
import './../itemList/ItemList'
import Item from './../item/Item'
import { getFirestore } from '../../firebase';



function LargeList(){


    
    const [games, setGames] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {

        const db = getFirestore()
        const productsCollection = db.collection('allgames')

        setLoad(true)
        
        productsCollection
        .get()
        .then((response) => setGames(response.docs.map(doc => ({...doc.data()}))))
        .catch((error) => console.error(error))
        .finally(() => setLoad(false));
        
        


    },[]);

    return <>
    
        <div className='container-fluid row prx justify-content-around'>

            {load ? (
                <div className="prx">
                    <div className='prxhv d-flex align-items-start my-auto mx-auto justify-content-center'>
                <div className="lds-dual-ring"></div>
                </div>
                </div>
            ) : (

                games.map((game) => {
                    return <Item key={game.id} game={game} />} )

            )}


        </div>
    
    </>    


}

export default LargeList

