import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Recommended.module.sass';

function RecommendedForYou () {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>Recommended For You</h1>
        <p className={styles.pageText}>
          Personalized recommendations based upon your browsing behavior
        </p>
      </div>
      <div className={styles.help}>
        <h2 className={styles.helpTitle}>Need More Help?</h2>
        <div className={styles.helpSection}>
          <div className={styles.helpCard}>
            <img
              src='staticImages/recommended/hand.png'
              title='hand'
              className={styles.logo}
            />
            <h3 className={styles.cardTitle}>Setup a Branding Consultation</h3>
            <p className={styles.cardText}>
              Speak to one of our branding experts and get personalized name
              recommendations from over 30,000+ curated names in our
              Marketplace.
            </p>
            <Link to='http:/www.google.com' className={styles.link}>
              Setup Complimentary Consultation
            </Link>
          </div>
          <div className={styles.helpCard}>
            <img
              src='staticImages/recommended/rocket.png'
              title='rocket'
              className={styles.logo}
            />
            <h3 className={styles.cardTitle}>Launch a Naming Contest</h3>
            <p className={styles.cardText}>
              Work with our community of 200,000+ creatives and get hundreds of
              custom name ideas.
            </p>
            <Link to='http:/www.google.com' className={styles.link}>
              See How Contest Work
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecommendedForYou;
