import ModalProviders from "./modal-providers";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IRootProviderProps {
  children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient();

const RootProvider: React.FunctionComponent<IRootProviderProps> = ({
  children,
}) => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ModalProviders />
        {children}
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default RootProvider;
