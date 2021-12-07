import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import "../../localization";
import { useTheme } from "../../themes";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
