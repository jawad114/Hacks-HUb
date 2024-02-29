import React from 'react';
import Aaside from './Aaside';
import Header from '../Components/Admin/Dashboard/Header'; // Assuming you have a Header component

const OrganizerLayout = ({ children }) => {

  return (
    <div className="flex h-screen overflow-hidden">
      <main className="flex flex-col w-full">
        {/* Header */}
        <header className="md:mt-4 flex items-center justify-center">
          <Header />
        </header>
        
        {/* Content */}
        <div className="md:flex-grow p-1 md:p-2 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default OrganizerLayout;