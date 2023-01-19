import { createBrowserRouter } from "react-router-dom";
import { Typography } from "./components/plastic/structure/Typography";
import { DashboardPage } from "./pages/dashboard/Dashboard";
import { LoginScreen } from "./pages/login/Login";
import { PageContainer } from "./pages/PageContainer";
import { ProductsPage } from "./pages/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/products",
    element: <PageContainer content={<ProductsPage />} />,
  },
  {
    path: "/dashboard",
    element: <PageContainer content={<DashboardPage />} />,
  },
]);
