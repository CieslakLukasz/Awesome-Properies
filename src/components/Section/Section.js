import React from "react";
import "./Section.less";

const Section = ({ title = "", children, ...props }) => {
  return (
    <section {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
