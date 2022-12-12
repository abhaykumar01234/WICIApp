import { useState, useId } from "react";
import { useOutletContext } from "react-router-dom";
import cx from "classnames";
import s from "./login.module.scss";
import { SlidingCheckbox } from "../../components/SlidingCheckbox";

const RETAIL_NETWORK_OPTIONS = [
  "Canadian Tire",
  "Mark's",
  "Sport Chek",
  "Gas+",
  "Sports Experts",
  "Pro Hockey Life",
  "National Sports",
  "Mark's Franchise",
  "Out of store",
  "Partner Locations",
  "Party City",
];

export const LoginPage = () => {
  const loginId = useId();
  const { login } = useOutletContext();
  const [lang, setLang] = useState("En");
  const [isTraining, setIsTraining] = useState(false);
  const [anotherStaffLead, setAnotherStaffLead] = useState(false);

  const [loginData, setLoginData] = useState({
    employerId: "",
    retailNetwork: "",
    storeLocNo: "",
    empFName: "",
    empLName: "",
    empNo: "",
    agentId: "",
    password: "",
    leadEmpFName: "",
    leadEmpLName: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setLoginData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const isEmployee = loginData.employerId === "e";
  const isAgent = loginData.employerId === "k";

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
            <td className="half">Employer ID</td>
            <td>
              <input
                type="text"
                name="employerId"
                value={loginData.employerId}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Retail Network</td>
            <td>
              <select
                name="retailNetwork"
                value={loginData.retailNetwork}
                onChange={handleChange}
              >
                <option value="0" disabled>
                  Please Select...
                </option>
                {RETAIL_NETWORK_OPTIONS.map((rn, idx) => (
                  <option key={idx} value={rn}>
                    {rn}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Store or Location No.</td>
            <td>
              <input
                type="tel"
                name="storeLocNo"
                value={loginData.storeLocNo}
                onChange={handleChange}
              />
            </td>
          </tr>
          {isEmployee && (
            <>
              <tr>
                <td>Employee First Name</td>
                <td>
                  <input
                    type="text"
                    name="empFName"
                    value={loginData.empFName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Employee Last Name</td>
                <td>
                  <input
                    type="text"
                    name="empLName"
                    value={loginData.empLName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Employee Number</td>
                <td>
                  <input
                    type="text"
                    name="empNo"
                    value={loginData.empNo}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </>
          )}
          {isAgent && (
            <>
              <tr>
                <td>Agent ID</td>
                <td>
                  <input
                    type="text"
                    name="agentId"
                    value={loginData.agentId}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="text"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      {isEmployee && (
        <>
          <div className="stack alignCenter g1">
            <h3>
              Training is available. To review training content, or login to
              take applications, please use the switch below
            </h3>
            <SlidingCheckbox
              id={loginId + "-trainingMode"}
              checked={isTraining}
              onChange={() => setIsTraining((s) => !s)}
              uncheckedJsx={"APP"}
              checkedJsx={"TRAINING"}
              redOnChecked
            />
          </div>
          {!isTraining && (
            <>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Did another staff member generate the lead for you?</td>
                    <td className="pad">
                      <SlidingCheckbox
                        id={loginId + "-anotherStaffLead"}
                        checked={anotherStaffLead}
                        onChange={() => setAnotherStaffLead((s) => !s)}
                        uncheckedJsx={"NO"}
                        checkedJsx={"YES"}
                        redOnChecked
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              {anotherStaffLead && (
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Employee First Name</td>
                      <td>
                        <input
                          type="text"
                          name="leadEmpFName"
                          value={loginData.leadEmpFName}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Employee Last Name</td>
                      <td>
                        <input
                          type="text"
                          name="leadEmpLName"
                          value={loginData.leadEmpLName}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </>
          )}
        </>
      )}

      <button className="green" onClick={login}>
        {isTraining ? "Start Training" : "Login"}
      </button>
    </div>
  );
};
