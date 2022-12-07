import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./errorPage";
import { Layout } from "./layout";
import { ApplicantInfo } from "./pages/ApplicantInfo";
import { Confirmation } from "./pages/Confirmation";
import { ContactInfo } from "./pages/ContactInfo";
import { FinancialInfo } from "./pages/FinancialInfo";
import { LoginPage } from "./pages/LoginPage";
import { MobilePayment } from "./pages/MobilePayment";
import { OptionalProduct } from "./pages/OptionalProduct";
import { ProductSelection } from "./pages/ProductSelection";
import { SupplementaryCard } from "./pages/SupplementaryCard";

export const WICIRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "/applicantInfo",
          element: <ApplicantInfo />,
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
  return <RouterProvider router={routes} />;
};
