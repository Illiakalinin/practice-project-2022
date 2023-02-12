import React from 'react';
import pricingList from './pricingList.json';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.sass';

function Pricing () {
  return (
    <div>
      <Header />
      <ul>
        {pricingList.map(p => (
          <li>
            <article>
              <div style={{ border: `10px solid ${p.color}` }}>
                <h3 xtyle={{ color: p.color }}>{p.type}</h3>
                <p>{p.describeType}</p>
                <p style={{ color: p.color }}>{p.price}</p>
              </div>
              <div>
                {p.profit.map(profit => (
                  <p className={styles.body} data-tooltip={profit.tooltip}>
                    {profit.body}
                  </p>
                ))}
              </div>
              <Link to='/startContest' style={{ backgroundColor: p.color }}>
                Start
              </Link>
            </article>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Pricing;
