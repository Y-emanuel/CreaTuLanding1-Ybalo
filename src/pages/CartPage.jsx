import React from 'react';
import Cart from '../components/Cart';
import '../styles/CartPage.css';

const CartPage = () => {
  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Tu carrito</h1>
      <Cart />
    </div>
  );
};

export default CartPage;

