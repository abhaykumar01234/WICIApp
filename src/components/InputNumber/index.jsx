import React from "react";

export const InputNumber = ({ id, label }) => {
  return (
    <div className="inline inputNumberField">
      <label htmlFor={id}>{label}</label>
      <button className="red icon">&#11014;</button>
      <input type="number" id={id} />
      <button className="red icon">&#11015;</button>
    </div>
  );
};
