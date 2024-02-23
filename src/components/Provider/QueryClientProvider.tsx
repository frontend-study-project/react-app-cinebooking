import { QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
}
const QueryClientProvider = (props: Props) => {
  const queryClient = new QueryClient();
  return (
    <Provider client={queryClient}>
      {props.children}
    </Provider>
  )
}
export default QueryClientProvider;