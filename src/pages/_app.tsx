import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '@/components/common/Navbar';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Navbar />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
