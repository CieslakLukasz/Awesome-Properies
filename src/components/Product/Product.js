import React from "react";
import "./Product.less";

function Product({ data }) {
  const { name, address, area, rooms, bedrooms, description, image } = data;

  return (
    <figure className="product">
      <img src={image} alt={name} className="product__image" />
      <figcaption className="product__details">
        <h2 className="product__name">{name}</h2>
        <p className="product__address">{address}</p>
        <p className="product__info">
          <strong>Area:</strong> {area} m² | <strong>Rooms:</strong> {rooms} |{" "}
          <strong>Bedrooms:</strong> {bedrooms}
        </p>
        <p className="product__description">{description}</p>
      </figcaption>
    </figure>
  );
}

export default Product;
