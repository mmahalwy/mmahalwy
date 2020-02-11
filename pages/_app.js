import App from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { NextSeo, DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga';
import { MDXProvider } from '@mdx-js/react';
import Navigation from '../components/Navigation';
import { createSEOConfig } from '../utils/seo';
import GlobalStyles from '../components/GlobalStyles';
import MdxComponents from '../components/MdxComponents';
import { config } from '../config';
import MainLayout from '../components/layouts/MainLayout';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;
export default class MyApp extends App {
  async componentDidMount() {
    ReactGA.initialize('UA-155281306-1');
    this.logPageView();
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
      <ThemeProvider theme={config.css}>
        <GlobalStyles />
        <DefaultSeo {...createSEOConfig()} />
        {/* (2) navigation */}
        <Main>
          <Navigation />

          {/* (3) page body */}
          <React.Fragment>
            <MDXProvider components={MdxComponents}>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </MDXProvider>
          </React.Fragment>

          {/* (4) footer */}
          {/* <Footer /> */}
        </Main>
      </ThemeProvider>
    );
  }
}
