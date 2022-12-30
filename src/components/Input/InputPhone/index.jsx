import React from "react";

export const InputPhone = ({
  name,
  value,
  onChange,
  onFocus = () => {},
  onBlur = () => {},
  ...restProps
}) => {
  const handleFocus = (e) => {
    onChange({ target: { name, value: e.target.value.replace(/-/g, "") } });
    onFocus();
  };

  const handleBlur = (e) => {
    onChange({
      target: {
        name,
        value: e.target.value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
      },
    });
    onBlur();
  };

  const handleChange = (e) => {
    if (isFinite(Number(e.target.value)))
      onChange({ target: { name, value: e.target.value } });
  };

  return (
    <input
      type="tel"
      name={name}
      value={value}
      maxLength={10}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...restProps}
    />
  );
};
