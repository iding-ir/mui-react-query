import { createTheme } from "@mui/material/styles";
import { primary, secondary, grey } from "./colors";

export const useTheme = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: primary[400],
        main: primary[600],
        dark: primary[800],
        contrastText: grey[50],
      },
      secondary: {
        light: secondary[400],
        main: secondary[600],
        dark: secondary[800],
        contrastText: grey[900],
      },
    },
  });

  return { theme };
};
