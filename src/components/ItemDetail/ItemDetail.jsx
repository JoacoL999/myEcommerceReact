import ItemCount from './../ItemListContainer/ItemCount'


function ItemDetail(game) {

    return <>
    
    <div className="card col-xl-5 col-7 mb-5">
    <img src={game.Img} className="text-center mx-auto gamePic" alt={game.Name} />
    <div className="card-body">
    <h5 className="card-title">{game.Name}</h5>
    <p className="card-text">{game.Descrip}</p>
    <div className='col-12'>
        <h5>${game.Price}</h5>
        <h4>Con impuestos: {game.price * 1.65}</h4>
    <ItemCount stock='10' initial='1'/>
    
    </div>
    <div>
    </div>
  
</div>
</div>
    
    
    
    
    </>



}

export default ItemDetail