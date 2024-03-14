import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import { publicRoutes } from "./routes/publicRoutes";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, key) => (
          <Route path={route.path} element={route.element} key={key} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
