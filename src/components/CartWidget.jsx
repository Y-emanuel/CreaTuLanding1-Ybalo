import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cart-widget__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        width="24"
        height="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5h12m0 0a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="cart-widget__count">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
