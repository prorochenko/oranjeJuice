import scss from './Header.module.scss';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';
import React, { useEffect } from 'react';

export const Header = () => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = to => {
    console.log(to);
  };

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
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
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
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
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
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
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
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Partnership
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
