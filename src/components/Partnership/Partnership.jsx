import scss from './Partnership.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const Partnership = () => {
  return (
    <Element name="partnership" className={scss.partnership}>
      <h2 className={scss.partnership__title}>
        Partnership with I&S Juice Farm
      </h2>
    </Element>
  );
};
