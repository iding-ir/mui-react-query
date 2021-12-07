import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";

import Items from "../Items/Items";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home}>
      <Items />
    </Box>
  );
};

export default Home;
