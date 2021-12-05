import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";

function App() {
  return (
    <Router>
      <CssBaseline />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
