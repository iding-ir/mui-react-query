import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import { routes, IRoute } from "./routes";

const Pages = () => {
  const renderRoutes = () => {
    return Object.values(routes).map(({ path, element }: IRoute) => {
      return <Route path={path} element={element} />;
    });
  };

  return (
    <Router>
      <CssBaseline />

      <Layout>
        <Routes>{renderRoutes()}</Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
