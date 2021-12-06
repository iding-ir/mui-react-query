import Box from "@mui/material/Box";

import Items from "../Items/Items";

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
      <Items />
    </Box>
  );
};

export default Home;
