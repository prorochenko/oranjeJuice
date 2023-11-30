import scss from './BecomePartner.module.scss';
import { Element } from 'react-scroll';

import React from 'react';

export const BecomePartner = ({ openModal }) => {
  return (
    <Element name="becomePartners" className={scss.becomePartner}>
      <h2 className={scss.becomePartner__title}>Become our partner</h2>
      <p className={scss.becomePartner__description}>
        We are always open to new partnerships and are happy to cooperate with
        strong businesses and organizations.
      </p>
      <button
        type="button"
        className={scss.becomePartner__button}
        onClick={openModal}
      >
        Find out more
      </button>
    </Element>
  );
};
