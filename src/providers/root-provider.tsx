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
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default RootProvider;
