import { createBrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalProvider";
import { ErrorPage } from "./errorPage";
import { Layout } from "./layout";
import { Confirmation } from "./pages/Confirmation";
import { ContactInfo } from "./pages/ContactInfo";
import { FinancialInfo } from "./pages/FinancialInfo";
import { LoginPage } from "./pages/LoginPage";
import { MobilePayment } from "./pages/MobilePayment";
import { OptionalProduct } from "./pages/OptionalProduct";
import { ProductSelection } from "./pages/ProductSelection";
import { SupplementaryCard } from "./pages/SupplementaryCard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/productSelection",
        element: <ProductSelection />,
      },
      {
        path: "/contactInfo",
        element: <ContactInfo />,
      },
      {
        path: "/financialInfo",
        element: <FinancialInfo />,
      },
      {
        path: "/supplementaryCard",
        element: <SupplementaryCard />,
      },
      {
        path: "/optionalProduct",
        element: <OptionalProduct />,
      },
      {
        path: "/mobilePayment",
        element: <MobilePayment />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);
