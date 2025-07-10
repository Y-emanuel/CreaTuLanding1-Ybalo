import React, { useState } from 'react';
import '../styles/ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrement} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button 
        onClick={handleAdd} 
        disabled={stock === 0} 
        className="btn-add"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
