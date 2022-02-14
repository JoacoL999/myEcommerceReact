import './../global.css'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom';
import { getFirestore } from './../firebase/index'

const Cart = () => {
    const {cart, removeHandler} = useCart();


    if(cart) {
    for (let i = 0; i < cart.length; i++) {
        var length = cart.item;
        length ++

    }
}

    console.log(length)

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
            ) : (

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
                </div>



            )}
        </div>
       
        
    </div>
    </div>
    </div>
    

    </>


}


export default Cart