import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { config } from '../config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/icons/favicon.ico" />
          <meta
            name="google-site-verification"
            content="t97GlICC8lT0XaJq1nl7jUbKQuUZptIoQ9WBrMavRCs"
          />
          <link rel="manifest" href="/manifest.json" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
