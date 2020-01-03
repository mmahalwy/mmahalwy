import Document, { Head, Main, NextScript } from 'next/document';
import { config } from '../config';
import { globalStyles } from '../styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/icons/favicon.ico" />

          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content={config.css.primaryColor} />

          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />

          <meta name="apple-mobile-web-app-title" content={config.siteName} />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-touch-icon.png" />

          <meta name="msapplication-TileColor" content={config.css.primaryColor} />
          <meta name="msapplication-TileImage" content="/static/icons/favicon-32x32.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.min.css"
          />
          {/* (5) global and local styles */}
          <style global jsx>
            {globalStyles}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
