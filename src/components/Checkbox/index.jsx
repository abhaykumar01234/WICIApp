import React from "react";

export const Checkbox = ({ id, label, ...restProps }) => {
  return (
    <div className="checkboxField">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} {...restProps} />
    </div>
  );
};
