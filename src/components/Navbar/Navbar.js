import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Strona Główna</Link>
        </li>
        <li>
          <Link to="/offers">Lista Ofert</Link>
        </li>
        <li>
          <Link to="/map">Mapa</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
