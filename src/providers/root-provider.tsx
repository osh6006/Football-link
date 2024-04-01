import { Toaster } from "react-hot-toast";
import CustomRoutes from "routes/custom-routes";
import { HelmetProvider } from "react-helmet-async";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IRootProviderProps {}

// Create a client
const queryClient = new QueryClient();

const RootProvider: React.FunctionComponent<IRootProviderProps> = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CustomRoutes />
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default RootProvider;
