import { useState, useEffect, createContext } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode, Theme } from "@mui/material";

import { primary, secondary, grey } from "./colors";
import getMode from "./getMode";

interface IThemeContext {
  mode?: PaletteMode;
  setMode: (mode: PaletteMode) => void;
  theme: Theme;
}

const iThemeLight = createTheme({ palette: { mode: "light" } });
const iThemeDark = createTheme({ palette: { mode: "dark" } });

export const ThemeContext = createContext<IThemeContext>({
  mode: undefined,
  setMode: () => {},
  theme: iThemeLight,
});

export const useTheme = (defaultMode?: PaletteMode) => {
  const { iMode } = getMode(defaultMode);

  const [mode, setMode] = useState<PaletteMode>(iMode);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor:
              mode === "dark"
                ? iThemeLight.palette.grey[900]
                : iThemeLight.palette.grey[50],
          },
        },
      },
    },
    palette: {
      mode,
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
      background: {
        default:
          mode === "dark"
            ? iThemeDark.palette.background.paper
            : iThemeLight.palette.grey[100],
      },
    },
  });

  return { theme, mode, setMode };
};
