import { useReducer } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import cx from "classnames";
import "./global.scss";

const initialState = {
  prevUrl: null,
  nextUrl: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HEADER": {
      const { prevUrl, nextUrl } = action.payload;
      return {
        ...state,
        prevUrl,
        nextUrl,
      };
    }
    default:
      return state;
  }
};

const BREADCRUMB_LINKS = [
  { url: "/productSelection", label: "Product Selection" },
  { url: "/contactInfo", label: "Contact Info" },
  { url: "/applicantInfo", label: "Applicant Info" },
  { url: "/financialInfo", label: "Financial Info" },
  { url: "/supplementaryCard", label: "Supplementary Card" },
  { url: "/optionalProduct", label: "Optional Product" },
  { url: "/mobilePayment", label: "Mobile Payment" },
  { url: "/confirmation", label: "Confirmation" },
];

const REVERSED_BREADCRUMB_LINKS = BREADCRUMB_LINKS.reverse();

export const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { prevUrl, nextUrl } = state;

  const setHeader = ({ prevUrl, nextUrl }) =>
    dispatch({ type: "SET_HEADER", payload: { prevUrl, nextUrl } });

  return (
    <div className="container">
      <header className="between">
        <button
          className={cx("red", { hide: !prevUrl })}
          onClick={() => navigate(prevUrl || "/")}
        >
          Prev
        </button>
        <div className="inline g0">
          <img src="/bank.png" alt="logo" className="logo" /> <h1>Bank</h1>
        </div>
        <div className="inline">
          <button
            className={cx("red", { hide: !nextUrl })}
            onClick={() => navigate(nextUrl || "/")}
          >
            Next
          </button>
          <button className="red icon">|||</button>
        </div>
      </header>
      {pathname !== "/" && (
        <div className="breadcrumb">
          {REVERSED_BREADCRUMB_LINKS.map(({ url, label }) => (
            <div key={url} className={cx("link", { active: pathname === url })}>
              {label}
            </div>
          ))}
        </div>
      )}
      <main>
        <Outlet context={{ ...state, setHeader }} />
      </main>

      <footer className="between">
        <button
          className={cx("red", { hide: !prevUrl })}
          onClick={() => navigate(prevUrl || "/")}
        >
          Prev
        </button>
        <button
          className={cx("red", { hide: !nextUrl })}
          onClick={() => navigate(nextUrl || "/")}
        >
          Next
        </button>
      </footer>
    </div>
  );
};
