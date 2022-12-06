import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container">
      <header>
        <h1 align="center">Page Not Found!</h1>
      </header>
      <main style={{ textAlign: "center" }}>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Go to Home</Link>
      </main>
      <footer>&nbsp;</footer>
    </div>
  );
};
