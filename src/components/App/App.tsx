import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import "../../localization";
import { useTheme, ThemeContext } from "../../themes";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  const { theme, mode, setMode } = useTheme({
    defaultMode: "dark",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={theme}>
          <Pages />
        </ThemeProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
