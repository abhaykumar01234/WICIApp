import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import cx from "classnames";
import s from "./product.module.scss";

const CARDS = [
  { label: "Triangle MasterCard", fileUrl: "triangle_card.webp" },
  { label: "OMP Gas Card", fileUrl: "omp_gas_card.webp" },
  { label: "OMR Cash Card", fileUrl: "omr_cash_card.webp" },
];

export const ProductSelection = () => {
  const { setHeader } = useOutletContext();
  const navigate = useNavigate();
  const [productSelection, setProductSelection] = useState({
    selectedCard: null,
    program: "select",
    promoCode: "select",
    prmoCodeOther: null,
    province: "select",
  });

  const handleChange = (key, val) =>
    setProductSelection((ps) => ({ ...ps, [key]: val }));

  useEffect(() => {
    setHeader({
      prevUrl: null,
      nextUrl: null,
    });
  }, []);

  return (
    <div className="stack g3 w-700">
      <h3 align="center">Choose one of the following credit cards</h3>
      <div className={s.grid}>
        {CARDS.map(({ label, fileUrl }) => (
          <div
            key={label}
            className={cx("stack alignCenter", s.card, {
              [s.selected]: label === productSelection.selectedCard,
            })}
            onClick={() => handleChange("selectedCard", label)}
          >
            <img src={fileUrl} alt={label} />
            <h5>{label}</h5>
          </div>
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        saepe itaque numquam qui vel? Harum error nihil officiis ipsa aperiam.
      </p>
      <p>
        Quo, impedit amet optio earum ipsa omnis quasi praesentium accusamus ea
        corporis sunt, adipisci iure, hic doloremque excepturi sequi! Quisquam?
      </p>
      <p>
        Placeat natus voluptatum repellendus molestias odit quod enim quia
        laudantium, exercitationem facilis consequuntur accusamus quasi
        inventore minus illo neque omnis.
      </p>
      <p>
        Voluptatum laboriosam vitae obcaecati aliquam nostrum eum culpa
        officiis, modi aliquid animi ad rem sunt quia corporis at voluptatibus
        facere!
      </p>
      <p>
        Ad delectus eius maiores cupiditate voluptatum reiciendis eligendi,
        tempora repudiandae voluptates nobis nulla nihil minus numquam
        laboriosam doloribus omnis autem.
      </p>
      <table className="table">
        <tbody>
          <tr>
            <td className="half">Program</td>
            <td>
              <select
                value={productSelection.program}
                onChange={(e) => handleChange("program", e.target.value)}
              >
                <option value="select" disabled>
                  Please Select...
                </option>
                <option value="Intercept">Intercept</option>
                <option value="InStore Events">InStore Events</option>
                <option value="CTP Events">CTP Events</option>
                <option value="CTP Local">CTP Local</option>
                <option value="Campus">Campus</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Promo Code</td>
            <td>
              <select
                value={productSelection.promoCode}
                onChange={(e) => handleChange("promoCode", e.target.value)}
              >
                <option value="select" disabled>
                  Please Select...
                </option>
                <option value="Intercept">Intercept</option>
                <option value="Grand Opening">Grand Opening</option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>
          {productSelection.promoCode === "Other" && (
            <tr>
              <td>Promo Code(Other)</td>
              <td>
                <input
                  type="text"
                  value={productSelection.prmoCodeOther}
                  onChange={(e) =>
                    handleChange("promoCodeOther", e.target.value)
                  }
                />
              </td>
            </tr>
          )}
          <tr>
            <td>Province</td>
            <td>
              <select
                value={productSelection.province}
                onChange={(e) => handleChange("province", e.target.value)}
              >
                <option value="select" disabled>
                  Please Select...
                </option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className={cx("green", s.submitBtn)}
        onClick={() => navigate("/contactInfo")}
      >
        Start Application
      </button>
    </div>
  );
};
