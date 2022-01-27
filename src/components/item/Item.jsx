
function Item({game}) {

    return <>
    
    <div className="card col-xl-5 col-7 mb-5">
    <img src={game.Img} className="text-center mx-auto gamePic" alt={game.Name} />
    <div className="card-body">
    <h5 className="card-title">{game.Name}</h5>
    <p className="card-text">{game.Descrip}</p>
    <div className='col-12'>
    <a className="btn btn-primary" >Ver mas</a>
    
    </div>
    <div>
    </div>
  
</div>
</div>
    
    
    </>


}

export default Item


