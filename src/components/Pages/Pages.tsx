import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";
import Page from "../Page/Page";

const Pages = () => {
  return (
    <Router>
      <CssBaseline />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />

          <Route path="/edit/:id" element={<Edit />} />

          <Route path="/page/:id" element={<Page />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
