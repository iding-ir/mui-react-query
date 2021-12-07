import { useState, createContext } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode, Theme } from "@mui/material";

import { primary, secondary, grey } from "./colors";

interface IThemeContext {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
  theme?: Theme;
}

export const ThemeContext = createContext<IThemeContext>({
  mode: "light",
  setMode: () => {},
});

interface Props {
  defaultMode?: PaletteMode;
}

export const useTheme = ({ defaultMode = "light" }: Props) => {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);

  const theme = createTheme({
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
    },
  });

  return { theme, mode, setMode };
};
