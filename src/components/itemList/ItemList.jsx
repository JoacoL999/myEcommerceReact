import React, { useEffect, useState } from 'react';
import games from './../../JSON/games'
import './itemList.css'
import Item from './../item/Item'



const getGames = () => {

    return new Promise((resolve) => {

        setTimeout(() => resolve(games), 2000 );


    })


}


function ItemList({}){


    
    const [games, setGames] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {

        setLoad(true)
        getGames()
        .then((data) => setGames(data))
        .catch((error) => console.error(error))
        .finally(() => setLoad(false));


    },[]);

    return <>
    
        <div className='container-fluid row justify-content-around'>

            {load ? (
                <div className="prx">
                    <div className='prxhv'>
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

export default ItemList

