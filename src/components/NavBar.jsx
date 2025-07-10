
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";
import "../styles/NavBar.css"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <h2>SamuraiShop</h2>
      </Link>

      <div className="navbar__links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/category/electronics"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          Electronics
        </NavLink>

        <NavLink
          to="/category/clothing"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          Clothing
        </NavLink>
      </div>

      <Link to="/cart" className="navbar__cartLink">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
