import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';
// import GoogleFonts from 'next-google-fonts';
import { config } from '../config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" /> */}
        <Head>
          <link rel="icon" href="/static/icons/favicon.ico" />
          <meta
            name="google-site-verification"
            content="t97GlICC8lT0XaJq1nl7jUbKQuUZptIoQ9WBrMavRCs"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={config.css.primaryColor} />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />

          <meta name="apple-mobile-web-app-title" content={config.siteName} />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/icons/apple-touch-icon.png"
          />

          <meta
            name="msapplication-TileColor"
            content={config.css.primaryColor}
          />
          <meta
            name="msapplication-TileImage"
            content="/static/icons/favicon-32x32.png"
          />
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.min.css"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
