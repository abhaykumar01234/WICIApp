import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { InputCurrency } from "../../components/Input/InputCurrency";
import { InputYearMonth } from "../../components/Input/InputYearMonth";
import { RadioGroup } from "../../components/RadioGroup";
import { SlidingCheckbox } from "../../components/SlidingCheckbox";
import { AddressSelect } from "../../components/AddressSelect";

export const ApplicantInfo = () => {
  const { setHeader } = useOutletContext();
  const [applicantInfo, setApplicantInfo] = useState({
    title: "",
    homeType: "",
    preferredLanguage: "",
    prevAddrInCanada: false,
    timeLivedAtCurrAddress: {
      years: 0,
      months: 0,
    },
    rentPerMonth: "",
  });

  const [selectedAddress, setSelectedAddress] = useState({});

  const handleAddress = (address) => {
    console.log(address.Id);
    console.log(address.Text);
    console.log(address.Description);
    setSelectedAddress(address);
  };

  useEffect(() => {
    setHeader({
      prevUrl: "/contactInfo",
      nextUrl: "/financialInfo",
    });
  }, []);

  const handleChange = (key, val) =>
    setApplicantInfo((s) => ({ ...s, [key]: val }));

  return (
    <div className="stack g3 w-700">
      <h3 align="center">Tell us about yourself</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <button className="green">Scan Driver's Licence</button>
            </td>
            <td className="pad">
              <strong>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                consequatur dolorem aut accusantium consequuntur, est ipsam
                asperiores obcaecati, earum rem fugit, iste quo laudantium.
                Natus aliquid sunt dignissimos molestiae ipsa, inventore
                explicabo culpa tenetur tempore similique nihil ad accusamus,
                quo soluta quae aut totam temporibus quasi consequatur ab odit
                necessitatibus esse a repellat. Porro iure velit nulla explicabo
                quod dolor quisquam sunt dignissimos
              </strong>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table">
        <tbody>
          <tr>
            <td className="half">ID Place of Issue</td>
            <td>
              <select name="idPlaceOfIssue">
                <option value="Option 01">Option 01</option>
                <option value="Option 02">Option 02</option>
                <option value="Option 03">Option 03</option>
                <option value="Option 04">Option 04</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>ID Type</td>
            <td>
              <select name="idType">
                <option value="Option 01">TypeOption 01</option>
                <option value="Option 02">TypeOption 02</option>
                <option value="Option 03">TypeOption 03</option>
                <option value="Option 04">TypeOption 04</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>ID Number</td>
            <td>
              <input type="tel" name="idNumber" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table">
        <tbody>
          <tr>
            <td className="half">First Name</td>
            <td>
              <input type="text" name="fname" />
            </td>
          </tr>
          <tr>
            <td>Middle name</td>
            <td>
              <input type="text" name="mname" />
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input type="text" name="lname" />
            </td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>
              <input type="date" name="dob" />
            </td>
          </tr>
        </tbody>
      </table>
      <section className="muted stack g1">
        <h3>Current Mailing Address</h3>
        <AddressSelect onChange={handleAddress} />
        <pre>{JSON.stringify(selectedAddress, null, 2)}</pre>
      </section>
      <section className="muted stack g1">
        <h3>Title</h3>
        <RadioGroup
          name="title"
          options={["MR", "MRS", "MISS", "MS"]}
          value={applicantInfo.title}
          onChange={(val) => handleChange("title", val)}
        />
      </section>
      <section className="muted stack g1">
        <h3>Home Type</h3>
        <RadioGroup
          name="homeType"
          options={[
            "Home",
            "Rent",
            "Live with parents",
            "Student Housing",
            "Others",
          ]}
          value={applicantInfo.homeType}
          onChange={(val) => handleChange("homeType", val)}
        />
      </section>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: "40%" }}>Mortage & Rent Payment (per month)</td>
            <td>
              <InputCurrency
                value={applicantInfo.rentPerMonth || 123456.78908}
                onChange={(val) => handleChange("rentPerMonth", val)}
              />
            </td>
          </tr>
          <tr>
            <td>How long have you lived at your current address?</td>
            <td className="inline wrap pad">
              <InputYearMonth
                value={applicantInfo.timeLivedAtCurrAddress}
                onChange={(val) => handleChange("timeLivedAtCurrAddress", val)}
              />
            </td>
          </tr>
          <tr>
            <td>Was your previous address in Canada?</td>
            <td className="pad">
              <SlidingCheckbox
                id={"prevAddrInCanada"}
                checked={applicantInfo.prevAddrInCanada}
                onChange={() =>
                  handleChange(
                    "prevAddrInCanada",
                    !applicantInfo.prevAddrInCanada
                  )
                }
                uncheckedJsx={"NO"}
                checkedJsx={"YES"}
                redOnChecked
              />
            </td>
          </tr>
        </tbody>
      </table>
      <section className="muted stack g1">
        <h3>Preferred Language</h3>
        <RadioGroup
          name="preferredLanguage"
          options={["English", "French"]}
          value={applicantInfo.preferredLanguage}
          onChange={(val) => handleChange("preferredLanguage", val)}
        />
      </section>
    </div>
  );
};
