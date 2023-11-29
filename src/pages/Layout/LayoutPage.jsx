import Layout from '../../components/Layout/Layout';
import LoadingComponent from '../../components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
  return (
    <>
      <Suspense fallback={LoadingComponent()}>
        <Outlet />
        <Layout />
      </Suspense>
    </>
  );
};
export default LayoutPage;
