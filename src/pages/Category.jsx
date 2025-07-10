import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../containers/ItemListContainer';
import '../styles/Home.css';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <div className="home-container">
      <h1 className="home-title">Categoría: {categoryId}</h1>
      <ItemListContainer isCategory={true} />
    </div>
  );
};

export default Category;
