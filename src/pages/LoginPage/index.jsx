import { useNavigate } from "react-router-dom";
import cx from "classnames";
import s from "./login.module.scss";

export const LoginPage = () => {
  const navigate = useNavigate();

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
            <td>Store/Location No</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Emp First Name</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Emp Last Name</td>
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
      <button className="green" onClick={() => navigate("/productSelection")}>
        Login
      </button>
    </div>
  );
};
