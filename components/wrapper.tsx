import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

/** A header and footer wrapper */
class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {children} = this.props;
    return (
      <div className={styles.container}>
        <Head>
          <title>Alex Ward</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description"
            content="Alex Ward's professional
            portfolio detailing his development background" />
        </Head>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          Designed and Developed by Alex Ward © 2022
        </footer>
      </div>
    );
  }
}

export default Wrapper;
