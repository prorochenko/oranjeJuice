import scss from './Slider.module.scss';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';
import brand6 from '../../assets/images/brand6.png';
import brand7 from '../../assets/images/brand7.png';
import brand8 from '../../assets/images/brand8.png';
import brand9 from '../../assets/images/brand9.png';

import React from 'react';

export const Slider = () => {
  const storyImages = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];
  const repeatedImages = Array.from({ length: 5 }, (_, i) => i).flatMap(
    () => storyImages
  );

  return (
    <div className={scss.slider}>
      <div>
        <div class={scss.hero__checks}>
          <div class={`${scss.slider} ${scss.page_width}`}>
            <div class={scss.hero__check_wrapper}>
              {repeatedImages.map((image, index) => (
                <img
                  key={index}
                  className={scss.brandLogo}
                  src={image}
                  alt="slider brand logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
