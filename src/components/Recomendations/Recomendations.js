import React from "react";
import "./Recomendations.less";
import Product from "../Product/Product.js";

const Recomendations = ({ list }) => {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <div className="recomendation">
      <ul className="recomendation__list">
        {list.map((product, index) => (
          <li key={index} className="recomendation__item">
            <Product key={index} data={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recomendations;
