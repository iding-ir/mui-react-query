import { QueryClient, QueryClientProvider } from "react-query";

import "../../localization";
import Pages from "../Pages/Pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
  );
}

export default App;
