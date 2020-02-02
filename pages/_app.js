import App from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { NextSeo, DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga';
import { MDXProvider } from '@mdx-js/react';
import Navigation from '../components/Navigation';
import { createSEOConfig } from '../utils/seo';
import getPostData from '../utils/get-post-data';
import BlogEngine from '../utils/blog-engine';
import { renderLayout } from '../utils/render-app-layout';
import GlobalStyles from '../components/GlobalStyles';
import MdxComponents from '../components/MdxComponents';
import { checkForSW } from '../utils/check-for-sw';
import { config } from '../config';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx, ...other }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const [allData, pageData] = await Promise.all([
      BlogEngine(),
      getPostData(ctx.pathname),
    ]).catch((error) => console.error('Error in _app.js getInitialProps()', error));

    const propsObj = Object.assign({}, { pageData, allData, ...pageProps });

    return { ...propsObj };
  }

  async componentDidMount() {
    ReactGA.initialize('UA-155281306-1');
    this.logPageView();
    await checkForSW();
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
    const { pageData } = this.props;

    return (
      <ThemeProvider theme={config.css}>
        <GlobalStyles />
        <DefaultSeo
          title="Mo's website"
          description="Welcome to my site!"
          twitter={{
            handle: '@mmahalwy',
            site: '@mmahalwy',
            cardType: 'summary_large_image',
          }}
        />
        {pageData && <NextSeo {...createSEOConfig(pageData)} />}
        {/* (2) navigation */}
        <Main>
          <Navigation />

          {/* (3) page body */}
          <React.Fragment>
            <MDXProvider components={MdxComponents}>{renderLayout(this.props)}</MDXProvider>
          </React.Fragment>

          {/* (4) footer */}
          {/* <Footer /> */}
        </Main>
      </ThemeProvider>
    );
  }
}
