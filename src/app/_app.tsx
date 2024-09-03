import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'; // Importa o tipo AppProps

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) { // Tipagem explícita
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
