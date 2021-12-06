import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
