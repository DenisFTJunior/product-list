import { createBrowserRouter } from "react-router-dom";
import { Typography } from "./components/plastic/structure/Typography";
import { PageContainer } from "./pages/PageContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer content={<></>} />,
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
