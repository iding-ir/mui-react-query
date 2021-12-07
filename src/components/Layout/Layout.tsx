import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import Switch from "@mui/material/Switch";

import { Styles } from "../../types";
import { ThemeContext } from "../../themes";

const styles: Styles = {
  link: {
    a: {
      padding: "0 1rem",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "1rem",
    },
  },
  wrapper: {
    display: "flex",
  },
  main: {
    padding: "1rem",
    width: "100%",
  },
  pusher: {
    width: "100%",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <Box sx={styles.wrapper}>
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
            <Box sx={styles.link}>
              <Link to="/create">
                <Trans i18nKey="Navbar.create" />
              </Link>
            </Box>
          </Typography>

          <Box sx={styles.pusher} />

          <Switch
            inputProps={{ "aria-label": "Theme switch" }}
            checked={mode === "dark"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMode && setMode(event.target.checked ? "dark" : "light");
            }}
          />
        </Toolbar>
      </AppBar>

      <Box component="main" sx={styles.main}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
