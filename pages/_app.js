import App, { Container } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import ReactGA from 'react-ga';
import Navigation from '../components/Navigation';
import { createSEOConfig } from '../utils/seo';
import getPostData from '../utils/get-post-data';
import BlogEngine from '../utils/blog-engine';
import { renderLayout } from '../utils/render-app-layout';
import Footer from '../components/Footer';
import { checkForSW } from '../utils/check-for-sw';

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
      <React.Fragment>
        {pageData && <NextSeo {...createSEOConfig(pageData)} />}
        {/* (2) navigation */}
        <Navigation />

        {/* (3) page body */}
        <React.Fragment>{renderLayout(this.props, this.state)}</React.Fragment>

        {/* (4) footer */}
        <Footer />
      </React.Fragment>
    );
  }
}
