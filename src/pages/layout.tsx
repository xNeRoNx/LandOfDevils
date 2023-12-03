// pages/layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metadata = {
  title: 'Land Of Devils',
  description: '--> Land Of Devils <--',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    {console.log('MyApp2')}
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
