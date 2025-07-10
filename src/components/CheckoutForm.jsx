import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import '../styles/CheckoutForm.css';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Ingresa un email válido.');
      return;
    }

    if (cart.length === 0) {
      setError('El carrito está vacío.');
      return;
    }

    setLoading(true);

    const order = {
      buyer: formData,
      items: cart,
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error('Error al generar la orden:', err);
      setError('Hubo un problema generando la orden.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Procesando orden...</p>;

  if (orderId) return (
    <div className="checkout-success">
      <h2>¡Compra realizada con éxito!</h2>
      <p>Tu número de orden es: <strong>{orderId}</strong></p>
      <p>Gracias por elegir SamuraiShop.</p>
    </div>
  );

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar Compra</h2>

      {error && <p className="checkout-error">{error}</p>}

      <label>
        Nombre completo:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Teléfono:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" disabled={loading}>Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;
