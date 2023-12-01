import scss from './Hero.module.scss';
import heroImage from '../../assets/images/Hero.jpg';
import heroMob from '../../assets/images/newmob.jpg';

import { Link, Events, scrollSpy } from 'react-scroll';
import React, { useEffect } from 'react';

export const Hero = () => {
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
    <div className={scss.hero}>
      <img
        className={scss.hero__imageDesk}
        src={heroImage}
        alt="Your Alt Text"
      />
      <img className={scss.hero__imageMob} src={heroMob} alt="Your Alt Text" />
      <h2 className={scss.hero__title}>I&S Juice Farm</h2>
      <div className={scss.hero__blockFirst}>
        Welcome to I&S Juice Farm, your trusted source for premium organic
        orange juice
      </div>
      <div className={scss.hero__blockSecond}>
        Join us in promoting a healthier lifestyle and become a partner today.
      </div>
      <Link
        className={scss.hero__button}
        to="benefits"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Benefits
      </Link>
    </div>
  );
};
