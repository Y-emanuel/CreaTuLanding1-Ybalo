import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';


const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>Tu carrito está vacío.</p>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-summary">
        <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        <button className="btn-clear" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn-checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
