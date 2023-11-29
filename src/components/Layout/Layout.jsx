import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Story } from '../Story/Story';
import { Slider } from '../Slider/Slider';
import { Benefits } from '../Benefits/Benefits';

import css from './Layout.module.scss';
import LoadingComponent from '../Loader/Loader';

const Layout = () => {
  return (
    <div className={css.box}>
      <Header />
      <Hero />
      <Story />
      <Slider />
      <Benefits />
      <Suspense fallback={LoadingComponent()}>
        <Outlet className={css.main} />
      </Suspense>
    </div>
  );
};

export default Layout;
