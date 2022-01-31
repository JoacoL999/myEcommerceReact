import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './tax.css' 


function TaxExample() {

    const [games, setGames] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {

        setLoad(true)
        fetch(`http://localhost:3001/games`,  { headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
        .then((response) => response.json())
        .then((data) => setGames(data))
        .catch((error) => console.error(error))
        .finally(() => setLoad(false));
        


    },[]);


    return <>

            {load ? (
                <div className="prx">
                    <div className='prxhv d-flex align-items-start my-auto mx-auto justify-content-center'>
                <div className="lds-dual-ring"></div>
                </div>
                </div>
            ) : (
    
        <div className="container-fluid"> 
            <div className="row">
                <div className="col-4 bg-perso"></div>
                <div className="col-8 container-fluid ">
                    <h1 className='pt-5 text-dark'>Como funciona nuestro Pagina</h1>
                    <div className='row justify-content-around'>
                    <div className='col-5 mt-5 text-light detailExt bg-r py-1 pb-3'>
                        <h2 className='m-3 pt-2'>Impuestos</h2>
                        <p>Como te vende Steam... Aunque el precio de un juego este catalogado en pesos argentinos, el cobro final es en dolares, al extranjero.
                            Por lo cual tiene una valor del precio indicado por steam mas los impuestos:
                        </p>
                        <ul>
                            <li>IVA = 21%</li>
                            <li>Impuesto Pais = 8%</li>
                            <li>Impuesto a las Ganancias = 35%</li>
                        </ul>
                        <p>Dandote un total del precio del producto + 64% en impuestos.</p>
                    </div>
                    <div className='col-5 mt-5 text-light detailExt bg-r py-1 pb-3'>
                        <h2 className='m-3 pt-2'>Nuestros precios</h2>
                        <p>Ahora que ya sabes como te vende Steam, hablemos de como vendemos nosotros, veamos los impuestos que se cobran en
                             nuestra tienda, y decida usted cual es mejor plan: </p>
                        <ul>
                            <li>IVA = 21%</li>
                            <li>Impuesto Pais = 8%</li>
                            <li>Impuesto a las Ganancias = 0%</li>
                        </ul>
                        <p>Dandote un total del precio del producto + 29% en impuestos.</p>
                    </div>
                    </div>
                    <h2 className='pt-5 text-dark'>Ahora que ya sabes como trabajamos...</h2>
                    <h4>Por que no dar una mirada en los destacados?</h4>
                    <div className='container-fluid row'>
                        <div className=''>
                        {games?.map((game)=>{
                            return(
                            <Link className='' key={game.id} to={'./../myEcommerceReact/'+game.id}><img className='ms-2 mb-2 col-2 header-tax' src={game.header_image} alt=""/></Link>//
                            )
                        })}
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    
            )  }
    
    </>





}


export default TaxExample