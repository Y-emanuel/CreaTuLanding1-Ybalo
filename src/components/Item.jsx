import { Link } from "react-router-dom";
import "../styles/Item.css"; 

const Item = ({ product }) => {
  const { id, title, price, imageUrl } = product;

  return (
    <div className="item-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/product/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
