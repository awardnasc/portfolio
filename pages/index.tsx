import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import STRING_CONSTANTS from '../components/strings';

const Home: React.FC = () => {
  return (
    <div className={styles.homecontainer}>

      <div style={{margin: '2em'}}>
        <Image
          className={styles.headshot}
          width={225}
          height={225}
          src={'/headshot.jpg'}
          alt="headshot"
          priority={true}
        />
      </div>
      <div className={styles.neoBox}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <h1 className={styles.flowText} style={{margin: '0'}}>
            {STRING_CONSTANTS.GREETING}
            &nbsp;
          </h1>
          <h1 className={styles.flowText} style={{margin: '0'}}>
            {STRING_CONSTANTS.INTRO}
          </h1>
        </div>

        <p style={{margin: '0'}}>
          {STRING_CONSTANTS.BIO}
        </p>
        <div style={{display: 'flex', marginTop: '.5em'}}>
          <div style={{width: '1.5em', height: '1.5em', marginRight: '.5em'}}>
            <a href="https://github.com/awardnasc" aria-label="Github">
              <FontAwesomeIcon className={styles.faIcon} icon={faGithub}/>
            </a>
          </div>
          <div style={{width: '1.5em', height: '1.5em'}}>
            <a href="https://www.linkedin.com/in/alex-w96" aria-label="Linkedin">
              <FontAwesomeIcon className={styles.faIcon} icon={faLinkedin}/>
            </a>

          </div>
        </div>

      </div>
    </div>

  );
};

export default Home;
