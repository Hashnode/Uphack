// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';

export default class Hashnews extends Document {

  constructor(props, context) {
      super(props, context);
  }

  static getInitialProps({ renderPage, req }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const helmet = Helmet.renderStatic();
    return { html, head, errorHtml, chunks, helmet }
  }

  render() {    
    const gAnalytics = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-120201239-1');
    `;

    return (
      <html>
        <Head>
            {this.props.helmet.title.toComponent()}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous" />
            <link rel="stylesheet" href="//cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css"/>
            <link rel="stylesheet" href="/static/css/app.css"/>
            <link rel="icon" href="/static/images/fav.png" type="image/png"/>
        </Head>
        <body>
            <Main />
            <script type="text/javascript" src="/static/js/encoding-indexes.min.js"></script>
            <script type="text/javascript" src="/static/js/encoding.min.js"></script>
            <script type="text/javascript" src="/static/js/nacl.min.js"></script>
            <script type="text/javascript" src="/static/js/nacl-util.min.js"></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/promise-polyfill@7/dist/polyfill.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120201239-1"></script>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html: gAnalytics}}></script>
            <NextScript />
            
        </body>
      </html>
    )
  }
}
