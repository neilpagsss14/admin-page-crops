import DashboardLayout from "../Layout/DashboardLayout";
import LogIn from "../pages/LogIn";
import Dashboard from "../pages/Dashboard";
import Farmer from "../pages/Farmer";

export const publicRoutes = [
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {},
];
