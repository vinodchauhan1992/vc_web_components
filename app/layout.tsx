import type { Metadata } from 'next';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import { Suspense } from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';
import '../styles/layout/layout.scss';

export const metadata: Metadata = {
  title: 'VC Components',
  description: 'These are web components developed by VC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link id="theme-css" href={`/themes/lara-light-cyan/theme.css`} rel="stylesheet"></link>
      </head>
      <body>
        <PrimeReactProvider>
          <LayoutProvider>
            <Suspense>
              <Layout>{children}</Layout>
            </Suspense>
          </LayoutProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
