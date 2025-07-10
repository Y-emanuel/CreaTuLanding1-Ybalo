import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from '../components/ItemList';
import '../styles/Home.css';
import TerminalLoader from '../components/TerminalLoader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const colRef = collection(db, 'items');
      const snapshot = await getDocs(colRef);
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
      setLoading(false);
    };
    fetchProducts();
  }, []);

   if (loading)
  return (
    <div className="home-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <TerminalLoader />
    </div>
  );

  const electronics = products.filter(p => p.category.toLowerCase() === 'electronics');
  const clothing = products.filter(p => p.category.toLowerCase() === 'clothing');

  return (
    <div className="home-container">
      <h1 className="home-title">Catálogo Completo</h1>

      <section className="category-section">
        <h2 className="category-title">Electronics</h2>
        {electronics.length ? (
          <ItemList products={electronics} />
        ) : (
          <p className="no-products">No hay productos en esta categoría.</p>
        )}
      </section>

      <section className="category-section">
        <h2 className="category-title">Clothing</h2>
        {clothing.length ? (
          <ItemList products={clothing} />
        ) : (
          <p className="no-products">No hay productos en esta categoría.</p>
        )}
      </section>
    </div>
  );
};

export default Home;
