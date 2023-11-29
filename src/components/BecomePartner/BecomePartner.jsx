import scss from './BecomePartner.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const BecomePartner = () => {
  return (
    <Element name="becomePartners" className={scss.becomePartner}>
      <h2 className={scss.becomePartner__title}>Become our partner</h2>
    </Element>
  );
};
