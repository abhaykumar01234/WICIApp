import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./errorPage";
import { Layout } from "./layout";
import { PrivateRoute } from "./layout/PrivateRoute";
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
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/productSelection",
          element: (
            <PrivateRoute>
              <ProductSelection />
            </PrivateRoute>
          ),
        },
        {
          path: "/contactInfo",
          element: (
            <PrivateRoute>
              <ContactInfo />
            </PrivateRoute>
          ),
        },
        {
          path: "/applicantInfo",
          element: (
            <PrivateRoute>
              <ApplicantInfo />
            </PrivateRoute>
          ),
        },
        {
          path: "/financialInfo",
          element: (
            <PrivateRoute>
              <FinancialInfo />
            </PrivateRoute>
          ),
        },
        {
          path: "/supplementaryCard",
          element: (
            <PrivateRoute>
              <SupplementaryCard />
            </PrivateRoute>
          ),
        },
        {
          path: "/optionalProduct",
          element: (
            <PrivateRoute>
              <OptionalProduct />
            </PrivateRoute>
          ),
        },
        {
          path: "/mobilePayment",
          element: (
            <PrivateRoute>
              <MobilePayment />
            </PrivateRoute>
          ),
        },
        {
          path: "/confirmation",
          element: (
            <PrivateRoute>
              <Confirmation />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};
