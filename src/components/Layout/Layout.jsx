import { useState } from 'react';

// import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Story } from '../Story/Story';
import { Slider } from '../Slider/Slider';
import { Benefits } from '../Benefits/Benefits';
import { Presence } from '../Presence/Presence';
import { Partnership } from '../Partnership/Partnership';
import { Reviews } from '../Reviews/Reviews';
import { BecomePartner } from '../BecomePartner/BecomePartner';
import { Footer } from '../Footer/Footer';
import Modal from '../Modal/Modal';
import css from './Layout.module.scss';
// import LoadingComponent from '../Loader/Loader';

const Layout = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    // <Suspense fallback={LoadingComponent()}>
    <div className={css.box}>
      <Header />
      <Hero />
      <Story />
      <Slider />
      <Benefits openModal={toggleModal} />
      <Presence />
      <Partnership openModal={toggleModal} />
      <Reviews />
      <BecomePartner openModal={toggleModal} />
      <Footer />
      {isModalOpen && <Modal closeModal={toggleModal} />}
      {/* <Outlet className={css.main} /> */}
    </div>
    // </Suspense>
  );
};

export default Layout;
