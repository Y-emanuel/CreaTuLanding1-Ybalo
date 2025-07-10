import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const { id, title, price, quantity, imageUrl } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={title} className="cart-item__image" />
      <div className="cart-item__details">
        <h4>{title}</h4>
        <p>Precio unitario: ${price.toFixed(2)}</p>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: ${(price * quantity).toFixed(2)}</p>
        <button className="btn-remove" onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
