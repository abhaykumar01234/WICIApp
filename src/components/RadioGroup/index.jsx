import cx from "classnames";

export const RadioGroup = ({ name, options, value, onChange }) => {
  return (
    <ul className="radioGroup">
      {options.map((option) => (
        <li key={option} className={cx({ checked: option === value })}>
          {option}
          <input
            type="radio"
            name={name}
            checked={option === value}
            onChange={() => onChange(option)}
          />
        </li>
      ))}
    </ul>
  );
};
