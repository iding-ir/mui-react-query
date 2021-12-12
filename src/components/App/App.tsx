import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import "../../localization";
import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useLanguage, LanguageContext } from "../Language/useLanguage";
import { useSearch, SearchContext } from "../Search/useSearch";
import { useDialog, DialogContext } from "../Dialog/useDialog";
import { useSnackbar, SnackbarContext } from "../Snackbar/useSnackbar";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  const themeValues = useTheme();
  const languageValues = useLanguage();
  const searchValues = useSearch();
  const dialogValues = useDialog();
  const snackbarValues = useSnackbar();

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarContext.Provider value={snackbarValues}>
        <DialogContext.Provider value={dialogValues}>
          <SearchContext.Provider value={searchValues}>
            <LanguageContext.Provider value={languageValues}>
              <ThemeContext.Provider value={themeValues}>
                <ThemeProvider theme={themeValues.theme}>
                  <HelmetProvider>
                    <Pages />
                  </HelmetProvider>
                </ThemeProvider>
              </ThemeContext.Provider>
            </LanguageContext.Provider>
          </SearchContext.Provider>
        </DialogContext.Provider>
      </SnackbarContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
