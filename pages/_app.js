import React from 'react';
import '../styles/globals.css';
import Wrapper from '../components/wrapper';
import PropTypes from 'prop-types';

function MyApp({Component, pageProps}) {
  return (
    <Wrapper>
        <Component {...pageProps} />
    </Wrapper>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;

