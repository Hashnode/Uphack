// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class Hashnews extends Document {

  constructor(props, context) {
      super(props, context);
  }

  static getInitialProps({ renderPage, req }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks }
  }

  render() {    
    return (
      <html>
        <Head>
            <title>uphack - Decentralized Social News app</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
            <link rel="stylesheet" href="/static/css/app.css"/>
        </Head>
        <body>
            <Main />
            <script type="text/javascript" src="/static/js/encoding-indexes.js"></script>
            <script type="text/javascript" src="/static/js/encoding.js"></script>
            <script type="text/javascript" src="/static/js/nacl.min.js"></script>
            <script type="text/javascript" src="/static/js/nacl-util.min.js"></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/promise-polyfill@7/dist/polyfill.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.4/fetch.min.js"></script>
            <NextScript />
        </body>
      </html>
    )
  }
}
