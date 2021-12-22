import { PaletteMode } from "@mui/material";

const getMode = (defaultMode?: PaletteMode) => {
  const storedMode = localStorage.getItem("mode") as PaletteMode;

  const fallbackMode = "dark";

  const iMode = storedMode || defaultMode || fallbackMode;

  return { iMode };
};

export default getMode;
