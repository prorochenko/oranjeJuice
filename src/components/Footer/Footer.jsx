import scss from './Footer.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const Footer = () => {
  return (
    <Element name="becomePartners" className={scss.footer}>
      <h2 className={scss.footer__title}>Footer</h2>
    </Element>
  );
};
