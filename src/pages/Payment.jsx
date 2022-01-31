import './../global.css'



const Payment = () => {


    return <>
    
        <div className="text-center fixed-prx container-fluid">
            <div className='row'>
            <div className='col-4 bg-pay'>

            </div>
            <div className='col-8'>
            <h1 className='pt-5'>Metodos de pago</h1>
            <div className='row justify-content-between mx-5 px-5 mt-5'>
            <div className="card col-xl-5 col-7 mb-5 bg-nDark text-light boxC">
                <img src='https://www.actualidadecommerce.com/wp-content/uploads/2020/10/paypal.png' className="text-center mx-auto paymentP mt-3" alt='PayPal' />
                <div className="card-body d-flex align-items-end mx-auto">
                    <h3 className="card-title">PayPal</h3>
            </div>
            </div>
            <div className="card col-xl-5 col-7 mb-5 bg-nDark text-light boxC">
                <img src='https://www.ospesalud.com.ar/wp-content/uploads/2019/01/Rapipago.png' className="text-center mx-auto  mt-3 w-75" alt='PayPal' />
                <div className="card-body d-flex align-items-end mx-auto">
                    <h3 className="card-title">RapiPago</h3>
            </div>
            </div>
            <div className="card col-xl-5 col-7 mb-5 bg-nDark text-light boxC">
                <img src='https://www.localespagofacil.com/images/pago-facil-logo.png' className="text-center mx-auto  mt-3 w-25" alt='PayPal' />
                <div className="card-body d-flex align-items-end mx-auto">
                    <h3 className="card-title">Pago Facil</h3>
            </div>
            </div>
            <div className="card col-xl-5 col-7 mb-5 bg-nDark text-light boxC">
                <img src='https://lauraeventos.com.ar/wp-content/uploads/2018/02/mercadopago-logo.png' className="text-center mx-auto  mt-3 w-75" alt='PayPal' />
                <div className="card-body d-flex align-items-end mx-auto">
                    <h3 className="card-title">Mercado Pago</h3>
            </div>
            </div>
            
            </div>
        </div>
        </div>
        </div>
    
    
    
    </>

}

export default Payment