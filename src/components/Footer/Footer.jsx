import scss from './Footer.module.scss';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

import React from 'react';

export const Footer = () => {
  return (
    <Element name="becomePartners" className={scss.footer}>
      <footer className={scss.footer__block}>
        <a href="/oranjeJuice" className={scss.footer__logo}>
          I&S Juice Farm
        </a>

        <nav className={scss.footer__navigation}>
          <ul className={scss.footer__links}>
            <li className={scss.footer__link}>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className={scss.footer__link}>
              <Link
                to="benefits"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Benefits
              </Link>
            </li>
            <li className={scss.footer__link}>
              <Link
                to="presence"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Our presence
              </Link>
            </li>
            <li className={scss.footer__link}>
              <Link
                to="partnership"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Partnership
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className={`${scss.footer__address} ${scss.footer__addressBig}`}>
            Avda. Alameda Sundheim 79
          </p>
          <p className={scss.footer__address}>
            Albalate de Cinca, Huesca(HU), 22534
          </p>
          <p className={scss.footer__address}>790 591 305</p>
        </div>
      </footer>
    </Element>
  );
};
