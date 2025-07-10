import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "../components/ItemDetail";
import TerminalLoader from "../components/TerminalLoader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id === undefined) return;

    setLoading(true);
    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
          setError(null);
        } else {
          setError("Producto no encontrado");
          setProduct(null);
        }
      })
      .catch((err) => {
        setError("Error al cargar producto");
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); 
      });
  }, [id]);

  if (loading)
  return (
    <div className="home-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <TerminalLoader />
    </div>
  );


  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
