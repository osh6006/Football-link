import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalProviders from "./modal-providers";

interface IRootProviderProps {
  children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient();

const RootProvider: React.FunctionComponent<IRootProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProviders />
      {children}
    </QueryClientProvider>
  );
};

export default RootProvider;
