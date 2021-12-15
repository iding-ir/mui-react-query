import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useLanguage, LanguageContext } from "../Language/useLanguage";
import { useSearch, SearchContext } from "../Search/useSearch";
import { useDialog, DialogContext } from "../Dialog/useDialog";
import { useSnackbar, SnackbarContext } from "../Snackbar/useSnackbar";

const queryClient = new QueryClient();

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  const themeValues = useTheme();
  const languageValues = useLanguage();
  const searchValues = useSearch();
  const dialogValues = useDialog();
  const snackbarValues = useSnackbar();

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <SnackbarContext.Provider value={snackbarValues}>
          <DialogContext.Provider value={dialogValues}>
            <SearchContext.Provider value={searchValues}>
              <LanguageContext.Provider value={languageValues}>
                <ThemeContext.Provider value={themeValues}>
                  <ThemeProvider theme={themeValues.theme}>
                    {children}
                  </ThemeProvider>
                </ThemeContext.Provider>
              </LanguageContext.Provider>
            </SearchContext.Provider>
          </DialogContext.Provider>
        </SnackbarContext.Provider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default Providers;
