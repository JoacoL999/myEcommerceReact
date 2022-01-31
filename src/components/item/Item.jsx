import { Link } from "react-router-dom";
import './../../global.css'

function Item({game}) {

    return <>
    
    <div className="card col-xl-5 col-7 mb-5 bg-nDark text-light boxC">
    <img src={game.header_image} className="text-center mx-auto gamePic mt-3" alt={game.name} />
    <div className="card-body">
    <h5 className="card-title">{game.name}</h5>
    <p className="card-text">{game.short_description}</p>
    <div className='col-12'>
    <Link className="btn learn-more" to={game.id}>
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Ver Mas</span>
  </Link>
    
    </div>
    <div>
    </div>
  
</div>
</div>
    
    
    </>


}

export default Item


