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
    <Suspense fallback={LoadingComponent()}>
      <div className={css.box}>
        <Header />
        <Hero />
        <Story />
        <Slider />
        <Benefits />
        <Outlet className={css.main} />
      </div>
    </Suspense>
  );
};

export default Layout;
