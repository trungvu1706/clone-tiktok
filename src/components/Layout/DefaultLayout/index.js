import React from 'react';
import Header from '~/components/Header';
import SideBar from '~/components/SideBar';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
