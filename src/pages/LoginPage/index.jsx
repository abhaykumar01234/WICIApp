import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import cx from "classnames";
import s from "./login.module.scss";

export const LoginPage = () => {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      prevUrl: null,
      nextUrl: "/productSelection",
    });
  }, []);

  return (
    <div className={cx("stack", s.loginPage)}>
      <div className={cx("inline g0", s.banner)}>
        <img src="/bank.png" alt="logo" className={s.logo} /> <h1>Bank</h1>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td>Employer ID</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Retail Network</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Store/Location Number</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Employee First Name</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Employee Last Name</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Employee Number</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="green">Login</button>
    </div>
  );
};
