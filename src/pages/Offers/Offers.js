import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import apartments from "../../data/tempOffersData.js";

const Offers = () => {
  return (
    <div className="section">
      <h1>Lista Ofert</h1>
      <ProductList list={apartments} />
    </div>
  );
};

export default Offers;
