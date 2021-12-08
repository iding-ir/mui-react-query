import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import "../../localization";
import { useTheme, ThemeContext } from "../../themes";
import { useLanguage, LanguageContext } from "../../languages";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  const { theme, mode, setMode } = useTheme({
    defaultMode: "dark",
  });

  const { language, setLanguage } = useLanguage({
    defaultLanguage: "en",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ mode, setMode, theme }}>
          <ThemeProvider theme={theme}>
            <Pages />
          </ThemeProvider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
