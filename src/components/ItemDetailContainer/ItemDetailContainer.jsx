import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import games from './../../JSON/games.json'
import ItemDetail from './../ItemDetail/ItemDetail'



const getGames = () => {

    return new Promise((resolve) => {

        setTimeout(() => resolve(games), 2000 );


    })


}



function ItemDetailContainer (){

    const { gameId } = useParams();
    const [game, setGame] = useState();
    const [load, setLoad] = useState(false);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    useEffect(() => {

        const selected = games.id;
        setLoad(true);
        getGames();
        fetch(selected)
            .then((res) => res.json())
            .then((data)=> setGame(data))
            .finally(() => setLoad(false));
    }, [gameId])

    if(setLoad || !game) return <p>cargando</p>;
    return <>
         
         <ItemDetail key={game.id} game={game} />
    
    </>

}

export default ItemDetailContainer