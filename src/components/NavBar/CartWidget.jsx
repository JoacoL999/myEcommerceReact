import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useCart } from '../../context/cartContext'

 const CartWidget = () => {

  const {cartTotal} = useCart();

        return <> 
          
            <Link className="a text-light" to='Cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
               
          </svg>
         <div className={cartTotal === 0 ? 'cancel counterItem' : 'show counterItem'}> <h3 className="text-light counter">{cartTotal}</h3> </div>
          </Link>
          </>
    }
       


export default CartWidget
