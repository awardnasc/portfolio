import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

/** A header and footer wrapper */
class Wrapper extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          Designed, Developed, and Deployed by Alex Ward
        </footer>
      </div>
    );
  }
}
Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Wrapper;
