import "./css/ItemCount.css"
import React, { useState } from 'react';


function ItemCount ({initial, stock}) {



const  [ Count, setCount] = useState(parseInt(initial));


  let addHandler  = () => setCount(Count + 1);
  let RemoveHandler = () => setCount(Count - 1);
  if(Count <= 1) {
    RemoveHandler = () => setCount(1);
  }



  if (Count >= stock){

    addHandler  = () => setCount(stock);
  
  }


    return <>

<div id="count" className="mx-auto col-8">
  <button id="dec" className="btn fa fa-minus pull-left mb-1" onClick={RemoveHandler}>-</button>
  <input type="number" max={stock} value={Count} readOnly="readonly"/>
  <button id="inc" className="btn fa fa-plus pull-right mb-1" onClick={addHandler}>+</button>
</div>

    </>
}


export default ItemCount;