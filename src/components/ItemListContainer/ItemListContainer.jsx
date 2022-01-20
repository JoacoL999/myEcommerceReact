import ItemCount from './ItemCount'
import './css/ItemListContainer.css'

function ItemListContainer(game) {

  


    return <>
            <div className="card col-2">
    <img src={game.Img} className="card-img-top gamePic" alt={game.Name} />
<div className="card-body">
    <h5 className="card-title">{game.Name}</h5>
    <p className="card-text">{game.Descrip}</p>
    <div className='col-12'>
    <ItemCount stock={game.stock} initial='1' />
    </div>
    <div>
    <a href="#" className="btn btn-primary">${game.Price}</a>
    </div>
</div>
</div>
            

</>
    

}




export default ItemListContainer;
  