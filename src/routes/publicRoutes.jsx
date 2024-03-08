import DashBoard from "../components/DashBoard";
import LandingPage from "../components/LandingPage";

export const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
];
