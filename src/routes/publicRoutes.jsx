import DashBoard from "../pages/DashBoard";
import LogIn from "../components/LogIn";
// import MainMenu from "../components/MainMenu";

export const publicRoutes = [
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "#",
    element: <DashBoard />,
  },
];
