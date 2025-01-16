import React from "react";
import "./Section.less";

const Section = ({ title = "", children, className = "", ...props }) => {
  const sectionClassName = `section ${className}`.trim();

  return (
    <section {...props} className={sectionClassName}>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
