import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/ItemDetail.css';

const ItemDetail = ({ product }) => {
  const {title, description, price, imageUrl, stock } = product;
  const [addedQty, setAddedQty] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAddedQty(quantity);
  };

  return (
    <div className="item-detail">
      <img src={imageUrl} alt={title} className="item-detail__image" />
      <div className="item-detail__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="item-detail__price">${price.toFixed(2)}</p>
        <p>Stock disponible: {stock}</p>

        {addedQty === 0 ? (
          stock > 0 ? (
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          ) : (
            <p className="out-of-stock">Producto sin stock</p>
          )
        ) : (
          <Link to="/cart" className="btn-go-cart">
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
