import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
import { lazy } from 'react';

const LayoutPage = lazy(() => import('../pages/Layout/LayoutPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}></Route>
    </Routes>
  );
};
