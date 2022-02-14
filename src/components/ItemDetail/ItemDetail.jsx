import { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft,  } from 'react-icons/fa'
import ItemCount from './../ItemListContainer/ItemCount'
import './imagedetail.css'
import './../../global.css'
import { useCart } from '../../context/cartContext'



function ItemDetail({game}) {

    const [current, setCurrent] = useState(0)

    const {cart, addItem} = useCart();
 
    const checkin = cart.every(item => {

        return item.item.id !== game.id

    })
    
    const onAdd = (Count) => { 

        const checkin = cart.every(item => {

            return item.item.id !== game.id

        })

        if(checkin){ 

        addItem(game, Count);
        } else {
            
        console.log(' ya estaba añadido')

        }
        

    }

    
    

    if(game.screenshots){

   for (let i = 0; i < game.screenshots.length; i++) {
       var length = game.screenshots[i]['id'];
       length ++
       
   }
}


    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1)

    }

    const prevSlide = () => {

        setCurrent(current === 0 ? length - 1 : current -1)

    }

    
    return <>
    
    <div className='row mb-2'>
        <div>
            <div className='container-fluid row p-0 mt-3 pt-5'>
                <div className='col-8 p-0 m-0 mt-4 bg-nDark detailExt pt-5' >
                    <div className='col-10 d-flex align-items-center track'>
                <span className='hoverP hoverL col-2 mx-auto'><FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /></span> 
                <span className='hoverP hoverR col-2 mx-auto'><FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /></span>
                    </div>
                { game.screenshots?.map((c, index) => (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <img src={c.path_full} key = {c.id} alt={game.name} className='previewG m-0 p-0'/>)}
                        
                    </div>
               ))};

                <div className='bg-greyL detailExt col-11 mx-auto mt-4 text-dark py-4'>
                    <div className=' p-4 col-12 mb-5 row'>
                        <div className='col-6 text-dark'><h4 className=' '>Publicador: {game.publishers}</h4></div>
                        <div className='col-6 text-dark'><h4 className=''>Desarrolladores: {game.developers}</h4></div>
                    </div>    
                    <div className='text-light'>
                        <p className='p-3 px-5'>{game.about_the_game}</p>
                        <h4 className='m-4'>Idiomas soportados</h4>
                        <p className='m-4'>{game.supported_languages}</p>
                        <div className='row col-12 mt-5'>
                        <div className='col-6 '>
                        <h4 className='m-4'>Requisitos Minimo</h4>
                        <p className='p-3 px-5'>{game.pc_requirements?.minimum}</p>
                        </div>
                        <div className='col-6'>
                        <h4 className='m-4'>Requisitos Recomendados</h4>
                        <p className='p-3 px-5'>{game.pc_requirements?.recommended}</p>
                        </div>
                        </div>
                    </div>      
                </div>
                </div>
                <div className='text-light col-3 m-0 mt-4 ms-auto bg-nDark detailExt pb-3 mb-2'>
                <h2 className='text-light text-center col-12 ms-auto mt-4'>{game.name}</h2>
                <img src={game.header_image} alt="" className='p-0 mx-auto detailExt m-5 mt-2 mb-3 col-12'/>
                <p className='text-start mt-2 p-3 col-12 bg-greyL detailExt'>{game.short_description}</p>
                <div className='col-12 bg-greyL detailExt py-3 d-flex justify-content-center'>
                <ul className='genres mx-auto bg-greyL'>
                { game.genres?.map((c) => (
 
                    <li className='mx-3' key={c.id}>{c.description}</li>

                ))}
                </ul>

                </div>
                <div className='col-12 py-3 bg-greyL detailExt mt-3'>
                    
                <ul className='categories mx-auto text-start'>
                { game.categories?.map((c) => (
 
                    <li className='mx-3 detailExt bg-greyN' key={c.id}>{c.description}</li>

                ))}
                </ul>
                </div>
                <div className='col-12 bg-greyL detailExt mt-3 py-3'>
                {game.release_date?.coming_soon === false ? 
                <h4 className='text-start ms-3 my-auto text-light'>Fecha de estreno: {game.release_date?.date}</h4> : 
                <h4 className='text-start ms-3 my-auto text-light'>Fecha estimada: {game.release_date?.date}</h4>  }
                </div>
                <div className='col-12 bg-greyL detailExt mt-3 pb-3'>
                <ul className='categories mx-auto text-start mb-2'><h4 className='text-center mb-3'>Sistemas Operativos</h4>
                {game.platforms?.windows === true ? 
                <li className='mx-3 detailExt bg-greyN'>Windows</li> :
                <p></p> }
                {game.platforms?.mac === true ? 
                <li className='mx-3 detailExt bg-greyN'>Mac</li> :
                <p></p> }
                {game.platforms?.linux === true ? 
                <li className='mx-3 detailExt bg-greyN'>linux</li> :
                <p></p> }
                </ul>
                </div>
                <div className='col-12 bg-greyL detailExt mt-3 py-3'>
                    {game.package_groups?.map((c, index) => (

                        <h4 key={index}>{c.title}</h4>

                    ))}
                    <div className='row mt-4'>
                    <div className='col-6'>
                    <h5 className=''>Stock: {game.stock}</h5>
                    </div>
                    <div className='col-11 text-center mx-auto py-4'>
                        {checkin ? (
                            
                            <ItemCount stock={game.stock} initial='1' onAdd={onAdd}/>
                        ) : (
                            <h3 className='text-light py-4 detailExt bg-greyN'>Ya se ha añadido al carrito</h3>

                        )}
                       </div>
                    
                    <div className='col-12 row mt-4'>
                        <div className='col-6'>
                        <h4>Precio Steam</h4>
                        <h4>Precio final</h4>
                        <h4>Nuestro precio</h4>
                        </div>
                        <div className='col-6'>
                        <h4>ARS$ {parseInt(game.price_overview?.initial + '0').toLocaleString('es')}</h4>
                        <h4>ARS$ {parseInt(game.price_overview?.initial * 1.64 + '0').toLocaleString('es')}</h4>
                        <h4>ARS$ {parseInt(game.price_overview?.initial * 1.29 + '0').toLocaleString('es')}</h4>
                        </div>
                    </div>

                    </div>

                </div>
                <div className='d-flex align-items-end col-12 mt-5 pt-5'>
                    <p className='align-items-end credits mt-5'>PRIVACY POLICY USER AGREEMENT Software subject to license {game.publishers} and {game.developers} - HEALTH WARNING: IF YOU HAVE A HISTORY OF EPILEPSY OR SEIZURES, CONSULT A DOCTOR BEFORE USE. CERTAIN PATTERNS MAY TRIGGER SEIZURES WITH NO PRIOR HISTORY. BEFORE USING AND FOR MORE DETAILS, SEE IMPORTANT HEALTH AND SAFETY WARNINGS - {game.name} is a registered trademark or trademark of {game.publishers} and related companies.</p>

                </div>
                </div>
            </div>


        </div>


    </div>
    
    
    
    
    </>


}

export default ItemDetail