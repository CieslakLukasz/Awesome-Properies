import React from "react";
import "./Product.less";

const Product = ({ data, ...props }) => {
  return <>{data.name}</>;
};

export default Product;
