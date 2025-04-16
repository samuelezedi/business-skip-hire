import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SelectSkip from "./SelectSkip";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectSkip />
    </QueryClientProvider>
  );
}

export default App;