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
            <title>Hashnews - Decentralized Hackernews</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
            <link rel="stylesheet" href="/static/css/app.css"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}
