import ItemCount from './ItemCount'
import './css/ItemListContainer.css'






function ItemListContainer(game) {

    function onAdd(onAdd) {




    }


    return <>
            <div className="card col-xl-2 col-7">
    <img src={game.Img} className="card-img-top gamePic" alt={game.Name} />
<div className="card-body">
    <h5 className="card-title">{game.Name}</h5>
    <p className="card-text">{game.Descrip}</p>
    <div className='col-12'>
    <a href="#" className="btn btn-primary">${game.Price}</a>
    
    </div>
    <div>
    <ItemCount stock={game.stock} initial={game.initial} onAdd={onAdd} />
    </div>
</div>
</div>
 

</>
    

}




export default ItemListContainer;
  