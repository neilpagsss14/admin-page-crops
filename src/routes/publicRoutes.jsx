import LogIn from "../pages/LogIn";
import Dashboard from "../pages/Dashboard";
import DashBoardLayout from "../Layout/DashboardLayout";

export const publicRoutes = [
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard", // Absolute path for the home page
        element: <Dashboard />,
      },
    ],
  },
];
