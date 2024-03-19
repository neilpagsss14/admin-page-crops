import DashBoard from "../components/DashBoard";
import LogIn from "../components/LogIn";

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
