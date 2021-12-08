import { useState, useEffect, createContext } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode, Theme } from "@mui/material";

import { primary, secondary, grey } from "./colors";

const defaultTheme = createTheme({});

interface IThemeContext {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
  theme: Theme;
}

const storedDefaultMode = localStorage.getItem("mode") as PaletteMode;

export const ThemeContext = createContext<IThemeContext>({
  mode: "light",
  setMode: () => {},
  theme: defaultTheme,
});

interface Props {
  defaultMode?: PaletteMode;
}

export const useTheme = ({ defaultMode = "light" }: Props) => {
  const [mode, setMode] = useState<PaletteMode>(
    storedDefaultMode || defaultMode
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

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
