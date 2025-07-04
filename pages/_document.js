import React from 'react';
import {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends React.Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add meta tags or links here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
