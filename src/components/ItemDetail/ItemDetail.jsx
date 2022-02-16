import { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft,  } from 'react-icons/fa'
import ItemCount from './../ItemListContainer/ItemCount'
import './imagedetail.css'
import './../../global.css'
import { useCart } from '../../context/cartContext'
import { Link } from 'react-router-dom'



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
                            <div>
                            <h3 className='text-light py-4 detailExt bg-greyN'>Ya se ha añadido al carrito</h3>
                            <Link className="cta col-10 mx-auto mt-4"  to='/cart'>
                        <span className='cta-1'>Carrito</span>
                        <span className='cta-1'>
                            <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                            <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                            <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                            </g>
                            </svg>
                        </span> 
                    </Link>  
                    </div>
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