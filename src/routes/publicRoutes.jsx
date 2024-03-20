import Layout from "../pages/Layout";
import LogIn from "../pages/LogIn";
// import MainMenu from "../components/MainMenu";

export const publicRoutes = [
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
  },
];
