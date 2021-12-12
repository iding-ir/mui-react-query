import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import "../../localization";
import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useLanguage, LanguageContext } from "../Language/useLanguage";
import { useSearch, SearchContext } from "../Search/useSearch";
import { usePrompt, PromptContext } from "../Prompt/usePrompt";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  const themeValues = useTheme({ defaultMode: "dark" });
  const languageValues = useLanguage({ defaultLanguage: "en" });
  const searchValues = useSearch();
  const promptValues = usePrompt();

  return (
    <QueryClientProvider client={queryClient}>
      <PromptContext.Provider value={promptValues}>
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
      </PromptContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
