import "./css/ItemCount.css"
import React, { useState } from 'react';

function ItemCount ({stock, onAdd}) {


const  [initial, setInitial] = useState(1);
  onAdd = () => setInitial(initial + 1);
  let offAdd = () => setInitial(initial - 1);
  if(initial <= 0) {
    offAdd = () => setInitial(0);
  }

  

  if (initial >= stock){

    onAdd = () => setInitial(stock);
  
  }


    return <>

<div id="count" className="mx-auto col-5 my-5">
  <button id="dec" className="btn fa fa-minus pull-left" onClick={offAdd}>-</button>
  <input type="number" max = {stock} value={initial} readOnly="readonly"/>
  <button id="inc" className="btn  fa fa-plus pull-right" onClick={onAdd}>+</button>
</div>

    </>
}


export default ItemCount;