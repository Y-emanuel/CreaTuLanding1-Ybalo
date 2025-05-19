import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
  return (
    <section className="item-list-container">
      <h2>{mensaje}</h2>
    </section>
  );
};

export default ItemListContainer;
