import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import TerminalLoader from '../components/TerminalLoader';

const ItemListContainer = ({ isCategory = false }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const itemsCollection = collection(db, 'items');

    const fetchData = async () => {
      try {
        const res = await getDocs(itemsCollection);
        let productsData = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (isCategory && categoryId) {
          productsData = productsData.filter(
            (product) =>
              product.category &&
              product.category.toLowerCase() === categoryId.toLowerCase()
          );
        }

        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, isCategory]);

  if (loading)
  return (
    <div className="home-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <TerminalLoader />
    </div>
  );


  return (
    <div className="home-container">
      {products.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#b5a9ff' }}>
          No se encontraron productos en esta categoría.
        </p>
      ) : (
        <div className="product-grid">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
