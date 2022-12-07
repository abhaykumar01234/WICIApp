import { useState, useId } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import cx from "classnames";
import s from "./login.module.scss";
import { SlidingCheckbox } from "../../components/SlidingCheckbox";

export const LoginPage = () => {
  const navigate = useNavigate();
  const loginId = useId();
  const { login } = useOutletContext();
  const [lang, setLang] = useState("En");
  const [isTraining, setIsTraining] = useState(false);

  return (
    <div className={cx("stack", s.loginPage)}>
      <div align="right">
        <SlidingCheckbox
          id={loginId + "-lang"}
          checked={lang === "Fr"}
          onChange={() => setLang((l) => (l === "En" ? "Fr" : "En"))}
          uncheckedJsx={"En"}
          checkedJsx={"Fr"}
          redOnChecked
        />
      </div>
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
              <input type="text" className="error" />
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
              <input type="text" className="error" />
            </td>
          </tr>
        </tbody>
      </table>
      <div align="center">
        <SlidingCheckbox
          id={loginId + "-trainingMode"}
          checked={isTraining}
          onChange={() => setIsTraining((s) => !s)}
          uncheckedJsx={"APP"}
          checkedJsx={"TRAINING"}
          redOnChecked
        />
      </div>
      {isTraining && (
        <table className="table">
          <tbody>
            <tr>
              <td>Training ID</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Agent ID</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <button className="green" onClick={login}>
        {isTraining ? "Start Training" : "Login"}
      </button>
    </div>
  );
};
