import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase'
import './../global.css'


const Finished = () => {

    const {orderId} = useParams()
    const [order, setOrder] = useState({})


    useEffect(() => {

        const db = getFirestore()
        console.log(orderId)
        db.collection('orders')
            .doc(orderId)
            .get()
            .then((res) => setOrder({id: res.id, ...res.data()}))
    },[orderId])
    
    return <>
    
    <div className="text-center fixed-prx container-fluid">
        <div className='row'>
        <div className='col-4 bg-cart'>
        </div>
        <div className='col-8 '>
            <div className='scrollex1'>
        <h1 className='pt-5'>Muchas gracias por su compra</h1>
        <h2>Detalle de la compra:</h2>
        <div className='col-12 '>
            <div className='col-5 px-3 py-3 bg-greyL mx-auto detailExt mt-3'>
                <ul className='categories text-light text-start'>
                    Datos del comprador
                    <li className='mx-1 detailExt bg-greyN'>
                        Nombre: {order.buyer?.firstName}
                    </li>
                    <li className='mx-1 detailExt bg-greyN'>
                        Apellido: {order.buyer?.lastName}
                    </li>
                    <li className='mx-1 detailExt bg-greyN'>
                        Email: {order.buyer?.email}
                    </li>
                    <li className='mx-1 detailExt bg-greyN'>
                        Telefono: {order.buyer?.phone}
                    </li>
                    <li className='mx-1 detailExt bg-greyN'>
                        Precio total pago: ARS$ {(order.total)?.toLocaleString('es')}
                    </li>
                    <li className='mx-1 detailExt bg-greyN'>
                        Fecha de compra:
                        <p>
                        {Date(order.date?.seconds)}
                        </p>
                    </li>
                </ul>
            </div>

        </div>
        <div className='col-12 row justify-content-between px-5'>
        {order.items?.map((game) => (
            <div className='col-5 bg-greyL mt-5 p-3 detailExt' key={game.item.name}>
            <img src={game.item.header_image} className='col-10' alt="" />
            <h3 className='text-light m-3'>{game.item.name}</h3>
            <h4>Cantidad: {game.quantity}</h4>
            <h4>Juego comprado exitosamente!</h4>
            </div>
        ))}
        </div>
        </div>
        </div>
        </div>
        </div>

        </>

}


export default Finished