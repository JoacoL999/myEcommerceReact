import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import './../itemList/ItemList'
import Item from './../item/Item'
import { getFirestore } from '../../firebase';

function ItemDetailGenre(){


    const { gameGenre } = useParams();
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
        
        

    },[gameGenre]);

    var genre;

        if(gameGenre === 'Action'){

         genre = 'Acción';
    
    
        } else if (gameGenre === 'Rol') {
    
        genre = 'Rol';
    
        } else if(gameGenre === 'Simulator') {
    
    
        genre = 'Simuladores';
    
        } else if(gameGenre === 'Adventure') {

        genre = 'Aventura'

        }

        
    const gamesGenres = games?.filter(e => e.genres[0]?.description === genre || e.genres[1]?.description === genre || e.genres[2]?.description === genre)

    return <>
    
        <div className='container-fluid row prx justify-content-around'>

            {load ? (
                <div className="prx">
                    <div className='prxhv d-flex align-items-start my-auto mx-auto justify-content-center'>
                <div className="lds-dual-ring"></div>
                </div>
                </div>
            ) : (
                gamesGenres.map((game) => {
                    return <Item key={game.id} game={game} />} )

            )}


        </div>
    
    </>    


}

export default ItemDetailGenre

