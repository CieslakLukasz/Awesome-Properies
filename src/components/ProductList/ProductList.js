import React from "react";
import "./ProductList.less";
import Product from "../Product/Product.js";

const ProductList = ({ list }) => {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <div className="productList">
      <ul className="productList__list">
        {list.map((product, index) => (
          <li key={index} className="productList__item">
            <Product key={index} data={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
