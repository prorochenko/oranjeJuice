import scss from './Partnership.module.scss';
import { Element } from 'react-scroll';
import partnership1 from '../../assets/images/image 24.png';
import partnership2 from '../../assets/images/image 25.png';
import partnership3 from '../../assets/images/image 26.png';

import React from 'react';

export const Partnership = ({ openModal }) => {
  return (
    <Element name="partnership" className={scss.partnership}>
      <h2 className={scss.partnership__title}>
        Partnership with I&S Juice Farm
      </h2>
      <p className={scss.partnership__description}>
        We offer different types of partnerships to meet the needs of different
        businesses and organizations
      </p>
      <div className={scss.partnership__blocks}>
        <div className={scss.partnership__block}>
          <img
            src={partnership1}
            alt="partnership logo"
            className={scss.partnership__image}
          />
          <h3 className={scss.partnership__subTitle}>Affilate</h3>
          <p className={scss.partnership__subDescription}>
            Become our affiliate and earn commissions for every sale made
            through your referrals.
          </p>
          <div className={scss.partnership__buttonBox}>
            <button
              type="button"
              className={scss.partnership__button}
              onClick={openModal}
            >
              Contact us
            </button>
          </div>
        </div>
        <div className={scss.partnership__block}>
          <img
            src={partnership2}
            alt="partnership logo"
            className={scss.partnership__image}
          />
          <h3 className={scss.partnership__subTitle}>Wholesale sales</h3>
          <p className={scss.partnership__subDescription}>
            We offer special conditions for wholesale partners who wish to
            purchase our orange juice in large quantities.
          </p>
          <div className={scss.partnership__buttonBox}>
            <button
              type="button"
              className={scss.partnership__button}
              onClick={openModal}
            >
              Contact us
            </button>
          </div>
        </div>
        <div className={scss.partnership__block}>
          <img
            src={partnership3}
            alt="partnership logo"
            className={scss.partnership__image}
          />
          <h3 className={scss.partnership__subTitle}>Retail</h3>
          <p className={scss.partnership__subDescription}>
            We are looking for retail partners who want to sell our orange juice
            in their stores and establishments.
          </p>
          <div className={scss.partnership__buttonBox}>
            <button
              type="button"
              className={scss.partnership__button}
              onClick={openModal}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};
