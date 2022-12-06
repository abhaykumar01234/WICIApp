import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import cx from "classnames";
import "./global.scss";
import { useGlobalCtx } from "../context/GlobalProvider";

export const Layout = () => {
  const { prevUrl, nextUrl } = useGlobalCtx();
  const navigate = useNavigate();

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

      <main>
        <Outlet />
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
