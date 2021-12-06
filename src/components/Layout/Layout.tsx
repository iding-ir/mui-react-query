import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Trans } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      padding: "0 1rem",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "1rem",
    },
  })
);

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }}>
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

      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
