import scss from './Story.module.scss';
import storyImage from '../../assets/images/Story.png';
import { Element } from 'react-scroll';

import React from 'react';

export const Story = () => {
  return (
    <Element name="about" className={scss.story}>
      <h2 className={scss.story__titleMobile}>Our story and victories</h2>
      <img className={scss.story__imageDesk} src={storyImage} alt="our story" />
      <div className={scss.story__imageBlock}>
        <div className={scss.story__imageMob}>
          <img src={storyImage} alt="our story" />
        </div>
        <h2 className={scss.story__title}>Our story and victories</h2>
        <p className={scss.story__descriptionMob}>
          I&S Juice Farm: A family-owned, international organic orange juice
          producer from Spain with over 60 years of commitment to quality and
          natural ingredients. Join us to discover our rich history and awards
          as we continue to create a world of delicious and healthy orange
          juice.
        </p>
        <p className={scss.story__description}>
          I&S Juice Farm, an international producer of organic orange juice from
          Spain, has deep roots in a small family business founded by our
          grandfather in the 1960s. Over a decade of dedicated work has led to
          significant growth while maintaining our core value of product
          quality. Committed to using only natural and organic ingredients, our
          success is underscored by recognition from customers and partners,
          manifested in numerous awards and quality certificates. <br /> <br />
          Join us on a journey through our history, where our team's unwavering
          dedication ensures the production of the highest quality juice,
          contributing to a delightful and healthy world of orange refreshment!
        </p>
      </div>
    </Element>
  );
};
