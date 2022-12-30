import React, { useId, useState } from "react";

const FORMAT = {
  years: /^([0-9]|[1-9][0-9])$/,
  months: /^([0-9]|0[1-9]|1[0-1])$/,
};

export const InputYearMonth = ({ value, onChange }) => {
  const id = useId();
  const [touched, setTouched] = useState({
    years: false,
    months: false,
  });

  const handleChange = (key, v) => {
    if (v === "" || FORMAT[key].test(v)) {
      onChange({ ...value, [key]: v });
      setTouched((t) => ({ ...t, [key]: true }));
    }
  };

  const getValue = (key) =>
    touched[key] ? value[key] : value[key] === 0 ? "" : value[key];

  return (
    <>
      <div className="inline inputNumberField">
        <label htmlFor={`${id}-years`}>Years</label>
        <button
          className="red icon dec"
          onClick={() => handleChange("years", value.years - 1)}
        >
          &#11015;
        </button>
        <input
          type="tel"
          id={`${id}-years`}
          maxLength={2}
          value={getValue("years")}
          onChange={(e) => handleChange("years", e.target.value)}
        />
        <button
          className="red icon"
          onClick={() => handleChange("years", Number(value.years) + 1)}
        >
          &#11014;
        </button>
      </div>

      <div className="inline inputNumberField">
        <label htmlFor={`${id}-months`}>Months</label>
        <button
          className="red icon dec"
          onClick={() => handleChange("months", value.months - 1)}
        >
          &#11015;
        </button>
        <input
          type="tel"
          id={`${id}-months`}
          maxLength={2}
          value={getValue("months")}
          onChange={(e) => handleChange("months", e.target.value)}
        />
        <button
          className="red icon"
          onClick={() => handleChange("months", Number(value.months) + 1)}
        >
          &#11014;
        </button>
      </div>
    </>
  );
};
