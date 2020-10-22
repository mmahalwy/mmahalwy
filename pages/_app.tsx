/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga';
import { Global, css } from '@emotion/core';
import { ThemeProvider, CSSReset, useColorMode } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import Navigation from '../components/Navigation';
import { createSEOConfig } from '../utils/seo';
import MdxComponents from '../components/MdxComponents';
import MainLayout from '../components/layouts/MainLayout';
import theme from '../styles/theme';
import { prismLightTheme, prismDarkTheme } from '../styles/prisma';

const GlobalStyle = () => {
  const { colorMode } = useColorMode();

  return (
    <Global
      styles={css`
        ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

        ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${colorMode === 'light' ? 'white' : '#171923'};
        }
      `}
    />
  );
};

export default class MyApp extends App {
  async componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-155281306-1');
      this.logPageView();
    }
  }

  componentDidUpdate() {
    this.logPageView();
  }

  logPageView() {
    const { router } = this.props;

    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(router.route);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <GlobalStyle />
        <DefaultSeo {...createSEOConfig()} />

        <Navigation />

        <>
          <MDXProvider components={MdxComponents}>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </MDXProvider>
        </>
      </ThemeProvider>
    );
  }
}
