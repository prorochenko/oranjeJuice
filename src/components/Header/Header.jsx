import scss from './Header.module.scss';
import { Link, Events, scrollSpy } from 'react-scroll';
import React, { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <header className={scss.header}>
      <a href="/oranjeJuice" className={scss.header__logo}>
        I&S Juice Farm
      </a>
      <nav>
        <ul className={scss.header__links}>
          <li className={scss.header_link}>
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
          <li className={scss.header_link}>
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
          <li className={scss.header_link}>
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
          <li className={scss.header_link}>
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
    </header>
  );
};
