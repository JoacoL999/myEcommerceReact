import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import ItemDetail from './../ItemDetail/ItemDetail'
import './../../global.css'




const getGames = () => {

    return new Promise((resolve) => {

        setTimeout(() => resolve(), 2000 );


    })


}


function ItemDetailContainer (){


    const { gameid } = useParams();
    const [game, setGame] = useState([]);
    const [load, setLoad] = useState(false);

    

    useEffect(() => {

        const URL = `http://localhost:3002/games/${gameid}`
        
        setLoad(true);
        
        fetch(URL,  { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
        .then((response) => response.json())
        .then((data) => setGame(data))
        .catch((error) => console.error(error))
        getGames()
        .finally(() => setLoad(false), );
    }, [gameid])


    function onAdd(onAdd) {




    }

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