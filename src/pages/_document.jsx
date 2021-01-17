import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3ESP2C1JGT"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];

                function gtag(){
                  dataLayer.push(arguments);
                }

                gtag('js', new Date());
                gtag('config', 'G-3ESP2C1JGT');`,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
