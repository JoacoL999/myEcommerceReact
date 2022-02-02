import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import games from './../../JSON/db'
import './../itemList/ItemList'
import Item from './../item/Item'


const getGames = () => {

    return new Promise((resolve) => {


        setTimeout(() => resolve(games), 2000 );

        


    })


}


function LargeList(){


    const { gameGenre } = useParams();
    const [games, setGames] = useState([]);
    const [load, setLoad] = useState(false);
   

    useEffect(() => {

        setLoad(true)
        fetch(`http://localhost:3002/games`,  { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
           .then ()
        .then((response) => response.json())
        .then((data) => setGames(data))
        .catch((error) => console.error(error))
        getGames()
        
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

export default LargeList

