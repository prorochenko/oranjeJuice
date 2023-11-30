import scss from './Benefits.module.scss';
import { Element } from 'react-scroll';
import benefits1 from '../../assets/images/image 17.png';
import benefits2 from '../../assets/images/Group 18.png';
import benefits3 from '../../assets/images/image 20.png';

import React from 'react';

export const Benefits = () => {
  return (
    <Element name="benefits" className={scss.benefits}>
      <h2 className={scss.benefits__title}>Benefits to work with us</h2>
      <div className={scss.benefits__block}>
        <div className={scss.benefits__textBlock}>
          <h2 className={scss.benefits__subTitle}>Favorable conditions</h2>
          <p className={scss.benefits__text}>
            Cooperation with I&S Juice Farm gives you the opportunity to receive
            competitive prices and flexible terms of delivery, ensuring a
            hassle-free experience from start to finish.
          </p>
          <button className={scss.benefits__button} type="button">
            Find out more
          </button>
        </div>
        <div>
          <img src={benefits1} alt="our benefits" />
        </div>
      </div>

      <div className={scss.benefits__block}>
        <div
          className={`${scss.benefits__textBlock_reverse} ${scss.benefits__textBlock}`}
        >
          <h2 className={scss.benefits__subTitle}>Profit growth</h2>
          <p className={scss.benefits__text}>
            On average, our partners see an increase in profits by 20-30%. This
            substantial growth in revenue is a testament to the quality and
            appeal of I&S Juice Farm's products. Additionally, a 10% increase in
            sales further contributes to your financial success.
          </p>
          <button className={scss.benefits__button} type="button">
            Find out more
          </button>
        </div>
        <div>
          <img src={benefits2} alt="our benefits" />
        </div>
      </div>

      <div className={scss.benefits__block}>
        <div className={scss.benefits__textBlock}>
          <h2 className={scss.benefits__subTitle}>Customer satisfaction</h2>
          <p className={scss.benefits__text}>
            With 98% satisfied customers, I&S Juice Farm's organic juices are in
            high demand among consumers. Partnering with us means offering
            products that customers love and trust, leading to enhanced brand
            loyalty and a thriving business.
          </p>
          <button className={scss.benefits__button} type="button">
            Find out more
          </button>
        </div>
        <div>
          <img src={benefits3} alt="our benefits" />
        </div>
      </div>
    </Element>
  );
};
