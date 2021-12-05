import Box from "@mui/material/Box";

import Books from "../Books/Books";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Books />
    </Box>
  );
};

export default Home;
