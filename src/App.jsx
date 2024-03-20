import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {publicRoutes.map((route, key) => (
    //       // <Route path={route.path} element={route.element} key={key} />
    //       <Route
    //         key={key}
    //         path={route.path}
    //         element={route.element}
    //         children={route.children}
    //         s
    //       />
    //     ))}
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
