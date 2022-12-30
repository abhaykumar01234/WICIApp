import React from "react";

const formatCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
}).format;

export const InputCurrency = ({
  value,
  onChange,
  maxLength = 6,
  onFocus = () => {},
  onBlur = () => {},
  ...restProps
}) => {
  const handleFocus = () => {
    onChange(value.replace(/\$|₹|,/g, ""));
    onFocus();
  };
  const handleBlur = () => {
    onChange(formatCurrency(value));
    onBlur();
  };
  const handleChange = (e) =>
    isFinite(Number(e.target.value)) && onChange(e.target.value);

  return (
    <input
      type="tel"
      value={value}
      maxLength={maxLength}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...restProps}
    />
  );
};
