import "./css/ItemCount.css"
import React, { useState } from 'react';


function ItemCount ({initial, stock, onAdd}) {



const  [ Count, setCount] = useState(parseInt(initial));


  let addHandler  = () => setCount(Count + 1);
  let RemoveHandler = () => setCount(Count - 1);
  if(Count <= 0) {
    RemoveHandler = () => setCount(1);
  }



  if (Count >= stock){

    addHandler  = () => setCount(stock);
  
  }


    return <>

<div id="count" className="mx-auto col-5 my-5">
  <button id="dec" className="btn fa fa-minus pull-left" onClick={RemoveHandler}>-</button>
  <input type="number" max={stock} value={Count} readOnly="readonly"/>
  <button id="inc" className="btn fa fa-plus pull-right" onClick={addHandler}>+</button>
  
  <div className="col-12 mt-4 mx-auto row d-flex justify-content-center w-100"> 


  <ul className="share-icons mx-auto col-12 m-0 p-0" onClick={( ) => onAdd(ItemCount)}>
  <li className="share-icons__item text-center m-0 mx-auto p-0"><i className="text-center  text-black">Añadir al Carrito</i></li>
  <li className="share-icons__block">
    <div className="share-icons__block-left"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></div>
    <div className="share-icons__block-right"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></div>
  </li>
</ul>
  </div>
</div>

    </>
}


export default ItemCount;