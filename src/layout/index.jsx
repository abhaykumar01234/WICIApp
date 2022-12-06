import React from "react";
import { Outlet } from "react-router-dom";
import "./global.scss";

export const Layout = () => {
  return (
    <div className="container">
      <header className="between">
        <button className="red">Prev</button>
        <div className="center">
          <img src="/bank.png" alt="logo" className="logo" /> <h1>Bank</h1>
        </div>
        <button className="red">Next</button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="between">
        <button className="red">Prev</button>
        <button className="red">Next</button>
      </footer>
    </div>
  );
};
