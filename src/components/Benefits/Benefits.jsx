import scss from './Benefits.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const Benefits = () => {
  return (
    <Element name="benefits" className={scss.benefits}>
      <h2 className={scss.benefits__title}>Benefits to work with us</h2>
    </Element>
  );
};
