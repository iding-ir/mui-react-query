import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Theme } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import { Trans } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      padding: "0 1rem",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "1rem",
    },
    wrapper: {
      display: "flex",
    },
    main: {
      padding: "1rem",
      width: "100%",
    },
  })
);

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link className={classes.link} to="/">
              <Trans i18nKey="Navbar.home" />
            </Link>
          </Typography>

          <Typography variant="h6" noWrap component="div">
            <Link className={classes.link} to="/create">
              <Trans i18nKey="Navbar.create" />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" className={classes.main}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
