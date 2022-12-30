import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Radio } from "../../components/Radio";
import { Checkbox } from "../../components/Checkbox";
import { InputPhone } from "../../components/Input/InputPhone";

export const ContactInfo = () => {
  const { setHeader } = useOutletContext();
  const [contactData, setContactData] = useState({
    primary: "",
    primaryType: "",
    secondary: "",
    secondaryType: "",
    email: "",
  });

  useEffect(() => {
    setHeader({
      prevUrl: "/productSelection",
      nextUrl: "/applicantInfo",
    });
  }, []);

  const handleChange = (e) =>
    setContactData((s) => ({ ...s, [e.target.name]: e.target.value }));

  return (
    <div className="stack g3 w-700">
      <div className="stack g1">
        <h2>Contact Information</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          pariatur nostrum eum ab veritatis similique cum adipisci dolor natus
          sit?
        </p>
        <h4>What's your number?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolore
          ratione maxime neque corrupti error.
        </p>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td className="half">Primary Phone</td>
            <td>
              <InputPhone
                name="primary"
                value={contactData.primary}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="inline g2">
        <Radio
          id={"primary_landline"}
          label="Landline"
          checked={contactData.primaryType === "landline"}
          name="primaryType"
          value="landline"
          onChange={handleChange}
        />
        <Radio
          id={"primary_mobile"}
          label="Mobile"
          checked={contactData.primaryType === "mobile"}
          name="primaryType"
          value="mobile"
          onChange={handleChange}
        />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td className="half">Secondary Phone</td>
            <td>
              <InputPhone
                name="secondary"
                value={contactData.secondary}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="inline g2">
        <Radio
          id={"secondary_landline"}
          label="Landline"
          checked={contactData.secondaryType === "landline"}
          name="secondaryType"
          value="landline"
          onChange={handleChange}
        />
        <Radio
          id={"secondary_mobile"}
          label="Mobile"
          checked={contactData.secondaryType === "mobile"}
          name="secondaryType"
          value="mobile"
          onChange={handleChange}
        />
      </div>
      <section className="muted">
        <Checkbox
          id={"iAgree"}
          label={
            <>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              mollitia molestiae iusto adipisci pariatur explicabo voluptas
              aspernatur quod. Sed, nihil?
            </>
          }
        />
      </section>
      <table className="table">
        <tbody>
          <tr>
            <td className="half">Email Address</td>
            <td>
              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Checkbox
        id={"tnc"}
        label={
          <div className="stack g1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              saepe nobis laborum! Repellat dignissimos, ipsum odit deleniti
              aliquam repellendus pariatur exercitationem ratione quibusdam
              reiciendis. Tenetur, error veniam. Consequuntur amet animi autem
              ducimus. Porro praesentium natus commodi dolorem dolor hic
              doloremque.
            </p>
            <p>
              Ab fuga enim, quam aliquam molestias ut saepe deserunt sint,
              reprehenderit illum libero totam, commodi omnis aut quae porro.
              Similique mollitia accusantium sapiente dolor quis laborum rem
              dolores, doloremque nisi quod, consequuntur obcaecati libero odio
              tempore cum aspernatur. Voluptas, iusto.
            </p>
            <p>
              Iste magni quos quasi harum, explicabo eaque quo sequi quidem
              tempore aliquid nulla iure voluptates aspernatur eligendi
              temporibus, voluptatibus expedita, et eius rem sunt fugit illum
              cupiditate? Maiores quibusdam modi assumenda incidunt iusto rerum,
              unde, dolores facilis labore beatae saepe.
            </p>
          </div>
        }
      />
      <section className="inverted g2 inline">
        <span style={{ fontSize: "5em", lineHeight: "0.001" }}>&#9098;</span>
        Get a $5 CT Money Bonus when you sign up Offers
      </section>
      <section className="muted">
        <Checkbox
          id="footer"
          label={
            <div className="stack g1">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                provident magni porro saepe libero nesciunt ipsam vero a!
                Repudiandae deserunt voluptate error illum aut. Dolores odio
                cumque possimus beatae natus qui porro pariatur, saepe soluta
                recusandae? Nam unde quia rerum!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique eius sunt assumenda blanditiis minima tempora,
                voluptas nihil eligendi aliquid! Necessitatibus excepturi
                quaerat labore asperiores iste magnam quae minima, natus nihil
                architecto ducimus repudiandae odit nostrum iusto voluptatibus
                numquam repellendus pariatur, nisi deleniti atque? Quos,
                mollitia rem laboriosam expedita non autem, tenetur qui, maiores
                ipsa officia exercitationem eius repellat magni provident.
              </p>
            </div>
          }
        />
      </section>
    </div>
  );
};
