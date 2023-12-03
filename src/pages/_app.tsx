// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/components/RootLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
