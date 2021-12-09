import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import "../../localization";
import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useLanguage, LanguageContext } from "../Language/useLanguage";
import { useSearch, SearchContext } from "../Search/useSearch";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  const { theme, mode, setMode } = useTheme({
    defaultMode: "dark",
  });

  const { language, setLanguage } = useLanguage({
    defaultLanguage: "en",
  });

  const { keyword, setKeyword, type, setType } = useSearch();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={{ keyword, setKeyword, type, setType }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ThemeContext.Provider value={{ mode, setMode, theme }}>
            <ThemeProvider theme={theme}>
              <HelmetProvider>
                <Pages />
              </HelmetProvider>
            </ThemeProvider>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </SearchContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
