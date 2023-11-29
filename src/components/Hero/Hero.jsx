import scss from './Hero.module.scss';
import heroImage from '../../assets/images/Hero.jpg';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';
import React, { useEffect } from 'react';

export const Hero = () => {
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
    <div className={scss.hero}>
      <img src={heroImage} alt="Your Alt Text" />
      <h2 className={scss.hero__title}>I&S Juice Farm</h2>
      <div className={scss.hero__blockFirst}>
        Welcome to I&S Juice Farm, your trusted source for premium organic
        orange juice
      </div>
      <div className={scss.hero__blockSecond}>
        Join us in promoting a healthier lifestyle and become apartner today.
      </div>
      <Link
        className={scss.hero__button}
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
    </div>
  );
};
