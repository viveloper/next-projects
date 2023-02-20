import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
