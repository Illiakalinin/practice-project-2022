import managedContestsCards from './../ManagedContest.json';
import styles from './ManagedContestList.module.sass';
import React from 'react';
import { Link } from 'react-router-dom';

function ManagedContests () {
  return (
    <>
      <div className={styles.managedContestsContainer}>
        <h2>Managed Contests</h2>
        <p>
          Better than a naming agency: Our hybrid-solution partners you with a
          trained Squadhelp branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>
        <ul className={styles.managedContestsList}>
          {managedContestsCards.map((c, i) => (
            <li key={i}>
              <div className={styles.managedContestsArticle}>
                <img src={c.iconSrc} alt={c.title} />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link className={styles.learnMore}>Learn More</Link>
      </div>
    </>
  );
}

export default ManagedContests;
