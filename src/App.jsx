import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a SamuraiTech Store – Innovación y tecnología a tu alcance." />
    </>
  );
}

export default App;
