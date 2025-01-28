import React from "react";
import "./Cms.less";

const Cms = ({ img, subtitle, text, overlay }) => {
  const { src, alt } = img;

  return (
    <div className="cms">
      <div className="cms__photo hover">
        <img src={src} alt={alt} />
        {overlay && <div class="overlay">{overlay}</div>}
      </div>
      <div className="cms__text">
        <h2 className="subtitle">{subtitle}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Cms;
