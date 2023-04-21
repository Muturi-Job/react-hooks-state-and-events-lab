// import React from "react";
import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  function handleButton () {
    setInCart(!inCart);
  }

  const itemClass = inCart ? 'in-cart' : ''; 
  const buttonText = inCart ? 'Remove from cart' : 'Add to cart';

  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButton}>{buttonText}</button>
    </li>
  );
  }

export default Item;
