import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <Box sx={styles.link}>
            <Link to="/">
              <Trans i18nKey="Navbar.home" />
            </Link>
          </Box>
        </Typography>

        <Typography variant="h6" noWrap component="div">
          <Box sx={styles.link} data-test-id="Navbar_CREATE">
            <Link to="/create">
              <Trans i18nKey="Navbar.create" />
            </Link>
          </Box>
        </Typography>

        <Box sx={styles.pusher} />

        <Language />

        <Theme />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
