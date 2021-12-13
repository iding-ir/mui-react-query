import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { styles } from "./styles";
import { routes, IRoute } from "../Pages/Routes";

const Navbar = () => {
  const renderTabs = () => {
    return Object.values(routes).map(({ path, title, navbar }: IRoute) => {
      return (
        navbar && (
          <Typography variant="h6" noWrap component="div">
            <Box sx={styles.link}>
              <Link to={path}>
                <Trans i18nKey={title} />
              </Link>
            </Box>
          </Typography>
        )
      );
    });
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {renderTabs()}

        <Box sx={styles.pusher} />

        <Language />

        <Theme />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
