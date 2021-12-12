import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Navbar from "../Navbar/Navbar";
import Prompt from "../Prompt/Prompt";
import { styles } from "./styles";

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

      <Prompt />
    </Box>
  );
}
