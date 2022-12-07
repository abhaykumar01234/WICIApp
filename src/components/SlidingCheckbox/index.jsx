import s from "./sliding.module.scss";
import cx from "classnames";

export const SlidingCheckbox = ({
  id,
  checked,
  onChange,
  checkedJsx = "YES",
  uncheckedJsx = "NO",
  redOnChecked = false,
}) => {
  return (
    <div className={s.checkbox}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>
        <div className={cx("center", { [s.red]: redOnChecked })}>
          {checkedJsx}
        </div>
        <div className={s.toggle}>&nbsp;</div>
        <div className={cx("center", { [s.red]: !redOnChecked })}>
          {uncheckedJsx}
        </div>
      </label>
    </div>
  );
};
