import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import NavBar from './navbar';
import styles from '../styles/Home.module.css';

/** A header and footer wrapper */
class Wrapper extends Component {
  static propTypes: { children: PropTypes.Validator<object>; };
  render() {
    const {children} = this.props;
    return (
      <html lang={'en'} >
        <Head>
          <meta name="Portfolio"
            content="Alex Ward's proffesional portfolio detailing
            his development background"
          />
        </Head>
        <div className={styles.container}>
          <Head>

            <title>Alex Ward</title>
            <link rel="icon" href="/favicon.ico" />

          </Head>
          <NavBar/>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
          Designed, Developed, and Deployed by Alex Ward © 2021
          </footer>
        </div>
      </html>
    );
  }
}
Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Wrapper;
