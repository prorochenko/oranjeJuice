import scss from './Footer.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const Footer = () => {
  return (
    <Element name="becomePartners" className={scss.footer}>
      <a href="/oranjeJuice" className={scss.footer__logo}>
        I&S Juice Farm
      </a>
    </Element>
  );
};
