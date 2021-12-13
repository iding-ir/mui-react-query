import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { styles } from "./styles";
import { routes, IRoute } from "../Pages/routes";
import { PagesContext } from "../Pages/usePages";

const Navbar = () => {
  const { pages, setPages } = useContext(PagesContext);

  const handleClick = (key: string) => {
    setPages({ ...pages, current: key });
  };

  const renderTabs = () => {
    return Object.values(routes).map(({ key, path, title, navbar }: IRoute) => {
      return (
        navbar && (
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={styles.link}
            data-selected={pages.current === key}
          >
            <Link to={path} onClick={() => handleClick(key)}>
              <Trans i18nKey={title} />
            </Link>
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

        <Theme />

        <Language />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
