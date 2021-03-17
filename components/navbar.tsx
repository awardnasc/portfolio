import React, {Component} from 'react';
import styles from '../styles/Home.module.css';

/** A header and footer wrapper */
class NavBar extends Component {
  render() {
    return (
      <div className={styles.navBar}>
        <h1
          className={styles.flowText}
          style={{marginLeft: '.5em'}}
        >
          {/* &lt;/&gt; */}
        </h1>
      </div>
    );
  }
}

export default NavBar;
