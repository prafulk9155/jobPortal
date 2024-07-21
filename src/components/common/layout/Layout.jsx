import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Header from '../header/header';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Section */}
        <Sidebar className="w-64" />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>

      {/* Footer Section */}
      <Footer className="sticky bottom-0" />
    </div>
  );
};

export default Layout;
