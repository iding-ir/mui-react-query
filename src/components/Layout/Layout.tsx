import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Styles } from "../../types";
import Navbar from "../Navbar/Navbar";

const styles: Styles = {
  main: {
    padding: "1rem",
    width: "100%",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box sx={styles.wrapper}>
      <Navbar />

      <Box component="main" sx={styles.main}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}
