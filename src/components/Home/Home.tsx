import Box from "@mui/material/Box";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";

import { getBooks } from "../../api";
import Books from "../Books/Books";

const Home = () => {
  const { data, status } = useQuery("books", getBooks);

  return status === "loading" ? (
    <CircularProgress />
  ) : (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Books books={data} />
    </Box>
  );
};

export default Home;
