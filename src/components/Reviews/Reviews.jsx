import scss from './Reviews.module.scss';
import { Element } from 'react-scroll';
import sliderLogo from '../../assets/images/image 33.png';
import sliderLogoMan from '../../assets/images/image 32.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';
import brand6 from '../../assets/images/brand1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Reviews = () => {
  return (
    <Element name="reviews" className={scss.reviews}>
      <h2 className={scss.reviews__title}>A word from our partners</h2>

      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={scss.reviews__slider}
      >
        <SwiperSlide className={scss.reviews__swiperSlide}>
          <img
            className={scss.reviews__sliderLogo}
            src={sliderLogo}
            alt="slider logo"
          />

          <div>
            <p className={scss.reviews__review}>
              I'm so happy with the quality and service from I&S Juice Farm. I
              order huge quantities for my shop, and their commitment to impact
              and they always deliver on time and to my exact specifications.
              They consistently exceed our expectations, making them an
              invaluable partner.
            </p>
            <div className={scss.reviews__authorBlock}>
              <img
                className={scss.reviews__sliderLogoMan}
                src={sliderLogoMan}
                alt="slider logo Man"
              />
              <div>
                <img
                  src={brand4}
                  alt="company logo"
                  className={scss.reviews__logoCompany}
                />

                <span className={scss.reviews__jobTitle}>
                  Marketing Director John Queen
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={scss.reviews__swiperSlide}>
          <img
            className={scss.reviews__sliderLogo}
            src={sliderLogo}
            alt="slider logo"
          />

          <div>
            <p className={scss.reviews__review}>
              The outstanding quality and exceptional service from I&S Juice
              Farm have made a significant, and their commitment to impact on
              our events. As an event coordinator, I rely on their prompt
              deliveries and attention to detail. They consistently exceed our
              expectations, making them an invaluable partner.
            </p>
            <div className={scss.reviews__authorBlock}>
              <img
                className={scss.reviews__sliderLogoMan}
                src={sliderLogoMan}
                alt="slider logo Man"
              />
              <div>
                <img
                  className={scss.reviews__logoCompany}
                  src={brand5}
                  alt="company logo"
                />
                <span>Event Coordinator, Sarah Thompson</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={scss.reviews__swiperSlide}>
          <img
            className={scss.reviews__sliderLogo}
            src={sliderLogo}
            alt="slider logo"
          />

          <div>
            <p className={scss.reviews__review}>
              I&S Juice Farm has truly set the standard for excellence. I've
              been a loyal customer for years, and their commitment to
              delivering top-notch products is unmatched. Their attention to
              customer preferences and reliable service make them my go-to
              choice for fresh and delicious juices.
            </p>
            <div className={scss.reviews__authorBlock}>
              <img
                src={sliderLogoMan}
                alt="slider logo Man"
                className={scss.reviews__sliderLogoMan}
              />
              <div>
                <img
                  className={scss.reviews__logoCompany}
                  src={brand6}
                  alt="company logo"
                />
                <span>Health Enthusiast, Emily Rodriguez</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Element>
  );
};
