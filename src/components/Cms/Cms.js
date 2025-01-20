import React from "react";
import "./Cms.less";

const Cms = () => {
  return (
    <div className="cms">
      <div className="cms__photo">
        <img
          src="images/apartments/apartment.webp"
          alt="Descriptive Alt Text"
        />
      </div>
      <div className="cms__text">
        <h2>Your Title Here</h2>
        <p>Your descriptive text here, optimized for SEO.</p>
      </div>
    </div>
  );
};

export default Cms;
