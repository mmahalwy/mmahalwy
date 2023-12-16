import '@mantine/core/styles.css';
import './global.modules.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import localFont from 'next/font/local';

import { resolver, theme } from './theme';
import BottomNavbar from './BottomNavbar';

const inter = localFont({
  src: [
    {
      path: './fonts/InterDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/InterDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/InterDisplay-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} cssVariablesResolver={resolver} forceColorScheme="dark">
          {/* <Navbar /> */}
          {children}
          <BottomNavbar />
        </MantineProvider>
      </body>
    </html>
  );
}
