'use client';

import { CSSVariablesResolver, MantineColorsTuple, createTheme } from '@mantine/core';
import localFont from 'next/font/local';

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

const blue: MantineColorsTuple = [
  '#e5f4ff',
  '#cde2ff',
  '#9bc2ff',
  '#64a0ff',
  '#3984fe',
  '#1d72fe',
  '#0969ff',
  '#0058e4',
  '#004ecc',
  '#0043b5',
];

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  fontFamilyMonospace: inter.style.fontFamily,
  headings: { fontFamily: inter.style.fontFamily },
  colors: {
    blue,
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-color-body': '#1f1f1f',
  },
  dark: {
    '--mantine-color-body': '#1f1f1f',
  },
  light: {},
});
