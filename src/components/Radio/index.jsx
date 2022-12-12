import React from "react";

export const Radio = ({ id, label, ...restProps }) => {
  return (
    <div className="radioField inline">
      <label htmlFor={id}>{label}</label>
      <input type="radio" id={id} {...restProps} />
    </div>
  );
};
