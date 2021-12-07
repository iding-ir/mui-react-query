import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";

const Pages = () => {
  return (
    <Router>
      <CssBaseline />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />

          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
