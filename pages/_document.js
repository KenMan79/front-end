import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = ctx.renderPage();

    return {
      ...initialProps,
      ...page,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* Constants */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/static/apple-icon-180x180.png" />
          <link rel="apple-touch-icon" href="/static/apple-icon-180x180.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* TODO: https://github.com/zeit/next.js/issues/512#issuecomment-322026199 */}
          {/* Fonts until TODO implemented */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i"
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
