import './../global.css'
import { useCart } from '../context/cartContext'
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore } from './../firebase/index'
import { useState } from 'react';
import firebase from "firebase/app";
import * as React from 'react'


const Cart = () => {
    const {cart, removeHandler, cartPrice} = useCart();
    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [view, setView] = useState(false)

    let navigate = useNavigate();

    const  db = getFirestore();

   
   
   const handleCheckout = (e) => {

    e.preventDefault();
    console.log('se envio el formulario')
    
    if(!firstName || !phone || !email || !lastName){

        console.log('Porfavor llene los datos')
        return false;
    }

    const newOrder = {

        date: firebase.firestore.Timestamp.fromDate(new Date()),
        buyer: {firstName, lastName, email, phone},
        items: cart,
        total: cartPrice
    
        
       }

       db.collection('orders')
        .add(newOrder)
        .then((res) => {
            console.log("Compra realizada exitosamenete", res.id)
            navigate(`./finished/${res.id}`);
        })
        .catch((err) => console.log("hubo un error", err))

}

    


    const payView = () => {

        setView(true)


    }

    if(cart) {
    for (let i = 0; i < cart.length; i++) {
        var length = cart.item;
        length ++

    }


    

}

    return <>
    
    <div className="text-center fixed-prx container-fluid">
        <div className='row'>
        <div className='col-4 bg-cart'>
        </div>
        <div className='col-8'>
        <h1 className='pt-5'>Carrito de compras</h1>
        <div className='container-fluid mt-5 pt-3 scrollex'>
            { length === undefined ? (
                <div>
             <h2>El carrito esta vacio</h2>
             <Link className='btn learn-more' to='/'>
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">Ir al inicio</span>
             </Link>
             </div>
            ) : view === false ? (
                <div>
                {cart.map((purchase)=>{
    
                    return <div className='col-12 row mb-5 text-light ' key={purchase.item.id}>
                        <div className='col-1'>
                            <img className='img-purchase' src={purchase.item.header_image} alt={purchase.item.name} />
                        </div>
                        <div className='col-5 text-end'>
                                <h6>{purchase.item.name}</h6>
                        </div>
                        <div className='col-3'>
                            <h6>Cantidad: {purchase.quantity}</h6>
                            <h6>Precio c/u: ARS$ {parseInt(purchase.item.price_overview.initial * 1.29 + '0').toLocaleString('es')}</h6>
                        </div>
                        <div className='col-2'>
                            <h6>Total</h6>
                            <h6>ARS$ {parseInt((purchase.item.price_overview.initial * 1.29 + '0') * purchase.quantity).toLocaleString('es')}</h6>
                        </div>
                        <div className='col-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={ ( ) => removeHandler(purchase.item.id)} width="16" height="16" fill="currentColor" className="bi bi-trash3 delete" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6.5 1a.5.5 0 0 0-.5.5v1h4v-1a.5.5 0 0 0-.5-.5h-3ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1H3.042l.846 10.58a1 1 0 0 0 .997.92h6.23a1 1 0 0 0 .997-.92l.846-10.58Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                        </div>
                        </div>
    
    
        })}
                    <h3>Precio total: ARS$ {cartPrice.toLocaleString('es')}</h3>
                    <span className="cta col-3 mx-auto mt-3" onClick={payView}>
                        <span className='cta-1'>Pagar</span>
                        <span className='cta-1'>
                            <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                            <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                            <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                            </g>
                            </svg>
                        </span> 
                    </span>  
                </div>
            ) : (

                <div>
                    <h2 className='text-center text-light'>Rellene el formulario</h2>
                <form action=""  name='myform' onSubmit={handleCheckout} className='text-light col-12 d-flex flex-column mx-auto text-center'>

                    <label className='col-6 mx-auto mb-2' htmlFor="name">Nombre</label>
                    <input className='col-6 mx-auto py-2 my-2' type="text" id='name' name='name' placeholder='Introduzca su nombre' value={firstName} onChange={(e) => setName(e.target.value)}/>
                    <label className='col-6 mx-auto my-2' htmlFor="lastName">Apellido</label>
                    <input className='col-6 mx-auto py-2 my-2' type="text" id='lastName' name='lastName' placeholder='Introduzca su apellido' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <label className='col-6 mx-auto my-4' htmlFor="email">Email</label>
                    <input className='col-6 mx-auto py-2 my-2' type="email" id='email' name='email' placeholder='introduzca su email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label className='col-6 mx-auto my-2' htmlFor="phone">Telefono</label>
                    <input className='col-6 mx-auto py-2 my-2' type="number" id='phone' name='phone' placeholder='Introduzca su nro de telefono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <div>
                    <span className='btn learn-more' onClick={handleCheckout}>
                    <span className="circle" aria-hidden="true">     
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Comprar</span>
                    </span>
                
                </div>
                </form>
                
                </div>
            )}
        </div>
       
        
    </div>
    </div>
    </div>
    

    </>


}


export default Cart