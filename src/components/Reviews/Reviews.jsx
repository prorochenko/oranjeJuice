import scss from './Reviews.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const Reviews = () => {
  return (
    <Element name="reviews" className={scss.reviews}>
      <h2 className={scss.reviews__title}>A word from our partners</h2>
    </Element>
  );
};
