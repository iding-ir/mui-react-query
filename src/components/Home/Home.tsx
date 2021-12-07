import Box from "@mui/material/Box";

import Items from "../Items/Items";
import { Styles } from "../../types";

const styles: Styles = {
  home: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
};

const Home = () => {
  return (
    <Box sx={styles.home}>
      <Items />
    </Box>
  );
};

export default Home;
