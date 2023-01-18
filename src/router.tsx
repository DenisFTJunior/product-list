import { createBrowserRouter } from "react-router-dom";
import { Typography } from "./components/plastic/structure/Typography";
import { LoginScreen } from "./pages/login/Login";
import { PageContainer } from "./pages/PageContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen/>,
  },
  {
    path: "/products",
    element: <PageContainer content={<Typography element="h1" text="products" color="red" />} />,
  },
  {
    path: "/dashboard",
    element: <PageContainer content={<Typography element="h1" text="dashboard" color="red" />} />,
  },
]);
