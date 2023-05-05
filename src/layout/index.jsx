import { useReducer } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import cx from "classnames";
import "./global.scss";
import CheckIdleActivity from "../components/CheckIdleActivity";

const initialState = {
  prevUrl: null,
  nextUrl: null,
  isLoggedIn: false,
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
    case "LOGIN": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
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

const getMobileBreadcrumbs = (pathname) => {
  const found = BREADCRUMB_LINKS.findIndex(({ url }) => url === pathname);
  if (found < -1) return [];
  if (found === BREADCRUMB_LINKS.length - 1)
    return BREADCRUMB_LINKS.slice(-3).reverse();

  return BREADCRUMB_LINKS.slice(
    Math.max(found - 1, 0),
    Math.max(found + 2, 3)
  ).reverse();
};

export const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { prevUrl, nextUrl, isLoggedIn } = state;

  const setHeader = ({ prevUrl, nextUrl }) =>
    dispatch({ type: "SET_HEADER", payload: { prevUrl, nextUrl } });

  const login = () => {
    dispatch({ type: "LOGIN" });
    navigate("/productSelection");
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="container">
      {isLoggedIn && (
        <>
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
              <button className="red icon" onClick={logout}>
                |||
              </button>
            </div>
          </header>
          <div className="breadcrumb">
            {(window.innerWidth > 730
              ? [...BREADCRUMB_LINKS].reverse()
              : getMobileBreadcrumbs(pathname)
            ).map(({ url, label }) => (
              <div
                key={url}
                className={cx("link", { active: pathname === url })}
              >
                {label}
              </div>
            ))}
          </div>
          <CheckIdleActivity />
        </>
      )}
      <main>
        <Outlet context={{ ...state, setHeader, login, logout }} />
      </main>

      {isLoggedIn && (
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
      )}
    </div>
  );
};
